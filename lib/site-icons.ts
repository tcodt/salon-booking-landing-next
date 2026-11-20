import type { IconType } from "react-icons";
import {
  MdAccessTime, MdLink, MdCalendarMonth, MdGroups, MdContentCut, MdStorefront, MdBarChart,
  MdTrendingUp, MdAssessment, MdFolderShared, MdHistory, MdSearch, MdSms, MdLoyalty, MdCake,
  MdEventBusy, MdPhoneDisabled, MdStar, MdCheckCircleOutline, MdPayments, MdPhone, MdSecurity,
} from "react-icons/md";

// کلیدها باید با ICON_CHOICES در بک‌اند (landing/models.py) یکی باشند.
const ICONS: Record<string, IconType> = {
  access_time: MdAccessTime, link: MdLink, calendar: MdCalendarMonth, groups: MdGroups,
  content_cut: MdContentCut, storefront: MdStorefront, bar_chart: MdBarChart, trending_up: MdTrendingUp,
  assessment: MdAssessment, folder: MdFolderShared, history: MdHistory, search: MdSearch, sms: MdSms,
  loyalty: MdLoyalty, cake: MdCake, event_busy: MdEventBusy, phone_disabled: MdPhoneDisabled,
  star: MdStar, check: MdCheckCircleOutline, payments: MdPayments, phone: MdPhone, security: MdSecurity,
};

export function siteIcon(key: string): IconType {
  return ICONS[key] ?? MdStar;
}
