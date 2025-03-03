import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MissionVisionComponent } from '../../components/mission-vision/mission-vision.component';
import { AboutUsComponent } from "../../components/about-us/about-us.component";
import { ServiceCardComponent } from '../../components/service-card/service-card.component';
import { InformationComponent } from "../../components/information/information.component";
import { VideosChannelComponent } from "../../components/videos-channel/videos-channel.component";
import { ContactUsComponent } from "../../components/contact-us/contact-us.component";

@Component({
  selector: 'app-welcome-page',
  imports: [MissionVisionComponent, AboutUsComponent, ServiceCardComponent, InformationComponent, VideosChannelComponent, ContactUsComponent],
  templateUrl: './welcome-page.component.html',
})
export default class WelcomePageComponent { }
