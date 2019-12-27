import { Component, OnInit } from '@angular/core';
import { StorageService } from './../services/storage.service';
// import { PlayerModule } from '';
@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  parm: string;

  constructor(private storage: StorageService) { }

  ngOnInit() {
     this.parm = this.storage.getItem('todolist');
        console.log("TO:"+ this.parm);
  }

  setUrl(sUrl: string) {

    console.log('URL:' + sUrl);
  }

}
