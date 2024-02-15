package com.rlaclgh.server.image;


import com.rlaclgh.server.dto.CreatePreSignedUrlRequest;
import com.rlaclgh.server.dto.CreatePreSignedUrlResponse;
import java.net.URL;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/image")
public class ImageController {

  @Autowired
  private ImageService imageService;


  @PostMapping("/pre-signed")
  public ResponseEntity<CreatePreSignedUrlResponse> createPreSignedImage(
      @RequestBody CreatePreSignedUrlRequest createPreSignedUrlRequest) {

    URL presignedPutObjectRequest = imageService.createSignedUrl(
        createPreSignedUrlRequest);
    return ResponseEntity.ok(new CreatePreSignedUrlResponse(presignedPutObjectRequest));
  }

}
