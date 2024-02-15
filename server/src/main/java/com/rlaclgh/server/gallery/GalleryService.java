package com.rlaclgh.server.gallery;


import com.rlaclgh.server.dto.CreateGalleryRequest;
import com.rlaclgh.server.entity.Gallery;
import com.rlaclgh.server.repository.GalleryRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

@Service
public class GalleryService {


  @Autowired
  private GalleryRepository galleryRepository;



  public Gallery createGallery(CreateGalleryRequest createGalleryRequest) {
    Gallery createdGallery = galleryRepository.save(new Gallery(createGalleryRequest.getImageUrl()));

    return createdGallery;
  }

  public List<Gallery> getGalleries() {
    List<Gallery> galleries = galleryRepository.findAll(Sort.by(Direction.DESC, "createdAt"));
    return galleries;
  }

}
