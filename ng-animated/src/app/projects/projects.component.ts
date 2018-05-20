import {Component, HostBinding, OnInit} from '@angular/core';
import { AnimationEvent } from "@angular/animations";

import { Project } from './project.model';

import { ProjectsService } from './projects.service';
import {markedTrigger, projectAnimationsTrigger, projectCreateNewTrigger} from "./animations";
import {routeSlideTrigger, routeStateTrigger} from "../shared/route-animations";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    markedTrigger,
    projectAnimationsTrigger,
    projectCreateNewTrigger,
    routeStateTrigger,
    routeSlideTrigger
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
  displayedProjects: Project[] = [];

  constructor(private prjService: ProjectsService) { }

  ngOnInit() {
    this.prjService.loadProjects()
      .subscribe(
        (prj: Project[]) => {
          this.progress = 'finished';
          this.projects = prj;
          if(this.projects.length >= 1) {
            this.displayedProjects.push(this.projects[0]);
          }
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

  onItemAnimated(animationEvent: AnimationEvent, lastProjectId: number) {
    if(animationEvent.fromState != 'void') {
      return;
    }
    if(this.projects.length > lastProjectId + 1) {
      this.displayedProjects.push(this.projects[lastProjectId + 1]);
    } else {
      this.projects = this.displayedProjects;
    }
  }
}
