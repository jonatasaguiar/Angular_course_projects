import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };
  // id: number;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  // ngOnInit() {
  //   // this.server = this.serversService.getServer(2);

  //   this.server = {
  //     id: this.route.snapshot.params['id'],
  //     name: this.route.snapshot.params['name'],
  //     status: this.route.snapshot.params['status'],
  //   };
  //   // this.id = this.route.snapshot.params['id'];
  //   // this.server = this.serversService.getServer(this.server.id);
  //   this.route.params.subscribe((params: Params) => {
  //     this.server.id = params['id'];
  //     this.server.name = params['name'];
  //     this.server.status = params['status'];
  //   });
  // }

  ngOnInit() {
    // this.server = this.serversService.getServer(2);
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.route.params.subscribe((params: Params) => {
      this.server = this.serversService.getServer(Number(params['id']));
    });
  }
  onEdit() {
    // const id = this.server.id;
    // console.log('id: ' + id);
    // this.router.navigate(['/servers', id, 'edit'], {
    //   queryParams: { allowEdit: '1' },
    //   fragment: 'loading',
    // });
    // this.router.navigate(['edit'], {
    //   queryParams: { allowEdit: '0' },
    //   relativeTo: this.route,
    // });

    this.router.navigate(['edit'], {
      queryParamsHandling: 'preserve',
      relativeTo: this.route,
    });
  }
}
