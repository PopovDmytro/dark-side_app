import {Component, HostBinding, OnInit} from '@angular/core';
import { AnimationEvent } from "@angular/animations";

import { Project } from './project.model';

import { ProjectsService } from './projects.service';
import {listStateTrigger, markedTrigger, projectAnimationsTrigger, projectCreateNewTrigger} from "./animations";
import {routeSlideTrigger, routeStateTrigger} from "../shared/route-animations";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    markedTrigger,
    projectAnimationsTrigger,
    projectCreateNewTrigger,
    // routeStateTrigger(),
    routeSlideTrigger,
    listStateTrigger
  ]
})
export class ProjectsComponent implements OnInit {

  // @HostBinding('@routeState') routerAnimation = true;
  @HostBinding('@routeSlideState') routerSlideAnimation = true;

  projects: Project[];
  markedPrjIndex = null;
  progress = 'progressing';
  createNew = false;
  projectAnimateState = 'default';

  constructor(private prjService: ProjectsService) { }

  ngOnInit() {
    this.prjService.loadProjects()
      .subscribe(
        (prj: Project[]) => {
          this.progress = 'finished';
          this.projects = prj;
        }
      );
  }

  onStatusUpdated(newStatus: string, id: number) {
    this.projects[id].status = newStatus;
  }

  onProjectDeleted(index: number) {
    this.projects.splice(index, 1);
  }

  onProjectCreated(project: Project) {
    this.createNew = false;
    setTimeout(() => {
      this.projects.unshift(project);
    }, 500);
    // this.projects.unshift(project);
    // this.projects.push(project);
  }

}
