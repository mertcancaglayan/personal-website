import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';
import { Project, Projects } from '../../models/ProfileData.model';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../layouts/card/card.component';
import { PopoverComponent } from '../layouts/popover/popover.component';
import { navbarElements } from '../../states/navbar.state';
import { NavbarElementsMap } from '../../models/navbar-elements.model';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule, CardComponent, PopoverComponent],
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss'],
})
export class ProjectsSectionComponent implements OnInit {
  @Input() projectsData!: Projects;
  selectedProject?: Project;
  selectedLanguage: 'english' | 'turkish' = 'english';
  isPopoverVisible: boolean = false;
  navbarLabels: NavbarElementsMap = navbarElements;

  projectCategories: { key: string; label: string }[] = [];

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    if (this.projectsData) {
      this.projectCategories = this.generateCategories(this.projectsData);
    }
    this.languageService.language$.subscribe((lang) => {
      this.selectedLanguage = lang;
    });
  }

  generateCategories(data: Projects): { key: string; label: string }[] {
    return Object.keys(data).map((key) => ({
      key,
      label: this.formatLabel(key),
    }));
  }

  formatLabel(key: string): string {
    return key.replace(/Projects/g, ' Projects').trim();
  }

  openPopover(project: Project) {
    this.selectedProject = project;
    this.isPopoverVisible = true;
    document.body.style.overflow = 'hidden';
  }

  closePopover() {
    this.isPopoverVisible = false;
    this.selectedProject = undefined;
    document.body.style.overflow = '';
  }
}
