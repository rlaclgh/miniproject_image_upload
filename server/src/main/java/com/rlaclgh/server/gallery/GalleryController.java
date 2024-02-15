package com.rlaclgh.server.gallery;


import com.rlaclgh.server.dto.CreateGalleryRequest;
import com.rlaclgh.server.entity.Gallery;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/gallery")
public class GalleryController {


  @Autowired
  private GalleryService galleryService;



  @PostMapping()
  public ResponseEntity<Gallery> createGallery(
      @RequestBody CreateGalleryRequest createGalleryRequest
  ) {
    Gallery createdGallery = galleryService.createGallery(createGalleryRequest);
    return ResponseEntity.ok(createdGallery);
  }

  @GetMapping()
  public ResponseEntity<List<Gallery>> getGalleries() {

    List<Gallery> galleries = galleryService.getGalleries();
    return ResponseEntity.ok(galleries);
  }




}
