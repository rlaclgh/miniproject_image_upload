## 설명

이미지 업로드 기능을 구현했습니다.
1. client에서 image 업로드시 server에서 presigned url 발급
2. client에서 presigned url로 s3에 이미지 업로드

## 실행결과

<img src="https://github.com/rlaclgh/miniproject_image_upload/assets/46914232/42598415-2151-4956-88b1-315309e9f83b" width="600px"></img>


## 실행방법

1. server/src/main/resources에 secret.properties 추가
```

aws.accessKeyId = AWS_ACCESS_KEY
aws.secretKey = AWS_SECRET_KEY


```

2. client/next.config.mjs 수정
```
images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "onetomany-image.s3.ap-northeast-2.amazonaws.com", // hostname 수정 
        port: "",
      },
    ],
  },


```

3. 실행 

```

docker compose up -d --build

```



## 기술스택
- client: Nextjs
- server: Spring boot
- db    : Postgre


