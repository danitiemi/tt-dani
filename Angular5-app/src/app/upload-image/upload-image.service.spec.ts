import { TestBed, inject } from '@angular/core/testing';

import { UploadImageService } from './upload-image.service';

describe('UploadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UploadImageService]
    });
  });

  it('should be created', inject([UploadImageService], (service: UploadImageService) => {
    expect(service).toBeTruthy();
  }));
});
