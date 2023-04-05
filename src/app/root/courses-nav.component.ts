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
      isVoiceOverOn: true,
      isVoiveOverMessagesOn: true,
    },
    {
      isActive: true,
      title: 'Read',
      subtitle: 'Question',
      icon: 'volume_down',
      isVoiceOverOn: true,
      isVoiveOverMessagesOn: false,
    },
    {
      isActive: false,
      title: 'Turn Off',
      icon: 'volume_off',
      isVoiceOverOn: false,
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
  ) {
    debugger;
    const { isVoiceOverOn, isVoiceOverMessagesOn } =
      this.voiceService.getSettings();

    if (isVoiceOverOn && isVoiceOverMessagesOn) {
      this.setVoiceOver(0);
    }
    if (isVoiceOverOn && !isVoiceOverMessagesOn) {
      this.setVoiceOver(1);
    }
    if (!isVoiceOverOn && !isVoiceOverMessagesOn) {
      this.setVoiceOver(2);
    }
  }

  private setVoiceOver(voiceOverIndex) {
    this.voiceOverIndex = voiceOverIndex;
    this.voiceOverSettings = this.voiceOverOptions[this.voiceOverIndex];
  }

  updateVoiceOver() {
    this.setVoiceOver((this.voiceOverIndex + 1) % this.voiceOverOptions.length);
    const { isVoiceOverOn, isVoiveOverMessagesOn } = this.voiceOverSettings;
    debugger;
    this.voiceService.updateSettigns(isVoiceOverOn, isVoiveOverMessagesOn);
  }

  openCourse(courseId: string) {
    debugger;
    this.router.navigate(['/course'], { queryParams: { id: courseId } });
  }
}
