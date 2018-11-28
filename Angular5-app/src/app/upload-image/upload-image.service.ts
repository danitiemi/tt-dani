import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';

@Injectable()
export class UploadImageService {

  constructor(private http: HttpClient) {}

  postFile(caption: string, fileToUpload: File) {
    const endpoint = 'http://localhost:8000/upload';
    const formData: FormData = new FormData();
    formData.append('Image', fileToUpload, fileToUpload.name);
    formData.append('ImageCaption', caption);
    return this.http
      .post(endpoint, formData);
  }
}
