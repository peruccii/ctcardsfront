import { InvitePlan } from '@/app/enums/invite_plan';
import { InviteType } from '@/app/enums/invite_type';

export interface ResponseInvite {
  title: string;
  sub_title: string;
  message: string;
  email: string;
  url_music: string;
  date: Date;
  id: string;
  imageUrls: string[];
  invite_type: InviteType;
  invite_plan: InvitePlan;
}
