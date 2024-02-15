package com.rlaclgh.server.image;


import com.rlaclgh.server.dto.CreatePreSignedUrlRequest;
import java.net.URL;
import java.time.Duration;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import software.amazon.awssdk.auth.credentials.AwsBasicCredentials;
import software.amazon.awssdk.auth.credentials.StaticCredentialsProvider;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;
import software.amazon.awssdk.services.s3.presigner.S3Presigner;
import software.amazon.awssdk.services.s3.presigner.model.PresignedPutObjectRequest;
import software.amazon.awssdk.services.s3.presigner.model.PutObjectPresignRequest;

@Service
public class ImageService {



  @Value("${aws.accessKeyId}")
  private String accessKeyId;

  @Value("${aws.secretKey}")
  private String secretKey;


  private static String BUCKET_NAME = "onetomany-image";


  public URL createSignedUrl(CreatePreSignedUrlRequest createPreSignedUrlRequest) {

    String contentType = createPreSignedUrlRequest.getContentType();

    String keyName = "raw/" + UUID.randomUUID() + "." + contentType.split("/")[1];
    try (S3Presigner presigner = S3Presigner.builder()
        .region(Region.AP_NORTHEAST_2).credentialsProvider(
            StaticCredentialsProvider.create(
                AwsBasicCredentials.create(accessKeyId, secretKey))
        ).build()) {
      PutObjectRequest objectRequest = PutObjectRequest.builder()
          .bucket(BUCKET_NAME)
          .key(keyName)
          .contentType(contentType)
          .build();
      PutObjectPresignRequest presignRequest = PutObjectPresignRequest.builder()
          .signatureDuration(Duration.ofSeconds(10))
          .putObjectRequest(objectRequest)
          .build();

      PresignedPutObjectRequest presignedRequest = presigner.presignPutObject(presignRequest);
      return presignedRequest.url();
    } catch (Error e) {
      return null;
    }
  }





}
