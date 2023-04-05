import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SourceService } from '../services/source.service';
import { MenuService } from '../services/menu.service';
import { VoiceService } from '../services/voice.service';
// import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-courses-nav',
  templateUrl: './courses-nav.component.html',
  styleUrls: ['./courses-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesNavComponent {
  // @ViewChild(MatSidenav) sidenav!: MatSidenav;
  courses = this.sourceService.getCourseTileList();
  voiceOverOptions = [
    {
      isActive: true,
      title: 'Read',
      subtitle: 'Question & Result',
      icon: 'volume_up',
      isVoiveOvecerOn: true,
      isVoiveOverMessagesOn: true,
    },
    {
      isActive: true,
      title: 'Read',
      subtitle: 'Question',
      icon: 'volume_down',
      isVoiveOvecerOn: true,
      isVoiveOverMessagesOn: false,
    },
    {
      isActive: false,
      title: 'Turn Off',
      icon: 'volume_off',
      isVoiveOvecerOn: false,
      isVoiveOverMessagesOn: false,
    },
  ];
  voiceOverIndex = 0;
  voiceOverSettings = this.voiceOverOptions[this.voiceOverIndex];

  constructor(
    private router: Router,
    private sourceService: SourceService,
    private voiceService: VoiceService,
    public menuService: MenuService
  ) {}

  updateVoiceOver() {
    this.voiceOverIndex =
      (this.voiceOverIndex + 1) % this.voiceOverOptions.length;
    this.voiceOverSettings = this.voiceOverOptions[this.voiceOverIndex];
    const { isVoiveOvecerOn, isVoiveOverMessagesOn } = this.voiceOverSettings;
    this.voiceService.updateSettigns(isVoiveOvecerOn, isVoiveOverMessagesOn);
  }

  openCourse(courseId: string) {
    debugger;
    this.router.navigate(['/course'], { queryParams: { id: courseId } });
  }
}
