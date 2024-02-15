package com.rlaclgh.server.dto;


import lombok.Data;
import software.amazon.awssdk.annotations.NotNull;

@Data
public class CreateGalleryRequest {

  @NotNull
  private String imageUrl;

}
