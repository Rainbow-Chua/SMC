import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-import-excel',
  templateUrl: './import-excel.component.html',
  styleUrls: ['./import-excel.component.css']
})
export class ImportExcelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  btnUploadIsDisabled: Boolean; //使上传按钮失效
  selectFileName:any = "未选择文件";
  uploader: FileUploader = new FileUploader({
  url: 'http://****',
  method: 'POST',
  itemAlias: 'file',
  autoUpload: false,
  // removeAfterUpload: true,
  allowedFileType: ['xlsx', 'xls'],
  });
  selectedFileOnChanged(event: any) {
  // 打印文件选择名称
  this.btnUploadIsDisabled = false;       
          <!-- “\”是转义字符，所以要表示一个字符串“\”就要用“\\” -->
  this.selectFileName = event.target.value.substr(event.target.value.lastIndexOf("\\")+1);
  console.log(this.selectFileName);
  }
  
  uploadFile() {
  // 上传
  this.btnUploadIsDisabled = true;
  this.uploader.queue[0].onSuccess = (response, status, headers) => {
  // 上传文件成功
  if (status === 200) {
  // 上传文件后获取服务器返回的数据
  console.log('status:' + status);
  const tempRes = JSON.parse(response);
  if (tempRes.result == 'OK') {
  this.isSuccess = true;
  this.btnUploadIsDisabled = false;
  this.showMessage("成员上传成功");
  } else {
  this.isSuccess = false;
  this.btnUploadIsDisabled = false;
  this.showMessage(tempRes.data);
  }
  } else {
  // 上传文件后获取服务器返回的数据错误
  this.isSuccess = false;
  this.btnUploadIsDisabled = false;
  this.showMessage("网络异常,请重新尝试");
  }
  };
  this.uploader.queue[0].upload(); // 开始上传
  }
  selectFile(){
  document.getElementById("file").click();
  }

}
