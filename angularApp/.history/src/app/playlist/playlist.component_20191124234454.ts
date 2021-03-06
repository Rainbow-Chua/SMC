import { Component, OnInit } from '@angular/core';
import { StorageService } from './../services/storage.service';
// import { PlayerModule } from '';
import { Router } from '@angular/router';
@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  parm: string;

  constructor(private storage: StorageService, private router: Router) { }

  ngOnInit() {
     this.parm = this.storage.getItem('todolist');
    // console.log(this.parm);
  }

  setUrl(sUrl: string) {
    return this.router.navigate(['player', {"url": sUrl}]);

}
    // this.router.navigateByUrl( ['login' , 1] , { queryParams: { name: 1 });
    //this.storage.setItem('url1','.');
    //console.log('URL:' + sUrl);

  }

}
