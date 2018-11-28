import { Component, OnInit } from '@angular/core';
import { UploadImageService } from './upload-image.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css'],
  providers:[UploadImageService]
})

export class UploadImageComponent implements OnInit {
  imageUrl: string = "/assets/img/pandas.png";
  fileToUpload: File = null;

  constructor(private imageService : UploadImageService) { }

  ngOnInit() {
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    // Show image preview
    let reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  OnSubmit(Caption,Image){
    this.imageService.postFile(Caption.value,this.fileToUpload).subscribe(
      data =>{
        console.log('done');
        Caption.value = null;
        Image.value = null;
        this.imageUrl = "/assets/img/success.png";
      }
    );
  }

}
