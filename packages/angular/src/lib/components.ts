/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Output, NgZone } from '@angular/core';

import { ProxyCmp } from './angular-component-lib/utils';

import type { Components } from '@brandsync/wc/dist/components';

import { defineCustomElement as defineBsAiDisclaimer } from '@brandsync/wc/dist/components/bs-ai-disclaimer.js';
import { defineCustomElement as defineBsAiGreeting } from '@brandsync/wc/dist/components/bs-ai-greeting.js';
import { defineCustomElement as defineBsAiThinking } from '@brandsync/wc/dist/components/bs-ai-thinking.js';
import { defineCustomElement as defineBsAttachment } from '@brandsync/wc/dist/components/bs-attachment.js';
import { defineCustomElement as defineBsAttachmentList } from '@brandsync/wc/dist/components/bs-attachment-list.js';
import { defineCustomElement as defineBsAvatar } from '@brandsync/wc/dist/components/bs-avatar.js';
import { defineCustomElement as defineBsBadge } from '@brandsync/wc/dist/components/bs-badge.js';
import { defineCustomElement as defineBsBreadcrumb } from '@brandsync/wc/dist/components/bs-breadcrumb.js';
import { defineCustomElement as defineBsBreadcrumbOverflow } from '@brandsync/wc/dist/components/bs-breadcrumb-overflow.js';
import { defineCustomElement as defineBsBreadcrumbs } from '@brandsync/wc/dist/components/bs-breadcrumbs.js';
import { defineCustomElement as defineBsButton } from '@brandsync/wc/dist/components/bs-button.js';
import { defineCustomElement as defineBsButtonSkeleton } from '@brandsync/wc/dist/components/bs-button-skeleton.js';
import { defineCustomElement as defineBsCard } from '@brandsync/wc/dist/components/bs-card.js';
import { defineCustomElement as defineBsChatbotFeedback } from '@brandsync/wc/dist/components/bs-chatbot-feedback.js';
import { defineCustomElement as defineBsChatbotHeader } from '@brandsync/wc/dist/components/bs-chatbot-header.js';
import { defineCustomElement as defineBsChatbotResponseAction } from '@brandsync/wc/dist/components/bs-chatbot-response-action.js';
import { defineCustomElement as defineBsChatbotSourcesDrawer } from '@brandsync/wc/dist/components/bs-chatbot-sources-drawer.js';
import { defineCustomElement as defineBsChatbotSuggestionButton } from '@brandsync/wc/dist/components/bs-chatbot-suggestion-button.js';
import { defineCustomElement as defineBsCheckbox } from '@brandsync/wc/dist/components/bs-checkbox.js';
import { defineCustomElement as defineBsCheckboxSkeleton } from '@brandsync/wc/dist/components/bs-checkbox-skeleton.js';
import { defineCustomElement as defineBsChipFilter } from '@brandsync/wc/dist/components/bs-chip-filter.js';
import { defineCustomElement as defineBsChipInformative } from '@brandsync/wc/dist/components/bs-chip-informative.js';
import { defineCustomElement as defineBsChipInput } from '@brandsync/wc/dist/components/bs-chip-input.js';
import { defineCustomElement as defineBsComposer } from '@brandsync/wc/dist/components/bs-composer.js';
import { defineCustomElement as defineBsComposerStatusBanner } from '@brandsync/wc/dist/components/bs-composer-status-banner.js';
import { defineCustomElement as defineBsDataTable } from '@brandsync/wc/dist/components/bs-data-table.js';
import { defineCustomElement as defineBsDialog } from '@brandsync/wc/dist/components/bs-dialog.js';
import { defineCustomElement as defineBsIconButton } from '@brandsync/wc/dist/components/bs-icon-button.js';
import { defineCustomElement as defineBsInlineTab } from '@brandsync/wc/dist/components/bs-inline-tab.js';
import { defineCustomElement as defineBsInput } from '@brandsync/wc/dist/components/bs-input.js';
import { defineCustomElement as defineBsLogo } from '@brandsync/wc/dist/components/bs-logo.js';
import { defineCustomElement as defineBsMenu } from '@brandsync/wc/dist/components/bs-menu.js';
import { defineCustomElement as defineBsMenuItem } from '@brandsync/wc/dist/components/bs-menu-item.js';
import { defineCustomElement as defineBsNavigationDrawer } from '@brandsync/wc/dist/components/bs-navigation-drawer.js';
import { defineCustomElement as defineBsNavigationDrawerItem } from '@brandsync/wc/dist/components/bs-navigation-drawer-item.js';
import { defineCustomElement as defineBsNavigationHeader } from '@brandsync/wc/dist/components/bs-navigation-header.js';
import { defineCustomElement as defineBsPagination } from '@brandsync/wc/dist/components/bs-pagination.js';
import { defineCustomElement as defineBsRadio } from '@brandsync/wc/dist/components/bs-radio.js';
import { defineCustomElement as defineBsSlider } from '@brandsync/wc/dist/components/bs-slider.js';
import { defineCustomElement as defineBsSnackbar } from '@brandsync/wc/dist/components/bs-snackbar.js';
import { defineCustomElement as defineBsSourceLink } from '@brandsync/wc/dist/components/bs-source-link.js';
import { defineCustomElement as defineBsStepper } from '@brandsync/wc/dist/components/bs-stepper.js';
import { defineCustomElement as defineBsStepperStep } from '@brandsync/wc/dist/components/bs-stepper-step.js';
import { defineCustomElement as defineBsSwitch } from '@brandsync/wc/dist/components/bs-switch.js';
import { defineCustomElement as defineBsTab } from '@brandsync/wc/dist/components/bs-tab.js';
import { defineCustomElement as defineBsTabs } from '@brandsync/wc/dist/components/bs-tabs.js';
import { defineCustomElement as defineBsTooltip } from '@brandsync/wc/dist/components/bs-tooltip.js';
@ProxyCmp({
  defineCustomElementFn: defineBsAiDisclaimer
})
@Component({
  selector: 'bs-ai-disclaimer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class BsAiDisclaimer {
  protected el: HTMLBsAiDisclaimerElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BsAiDisclaimer extends Components.BsAiDisclaimer {}


@ProxyCmp({
  defineCustomElementFn: defineBsAiGreeting,
  inputs: ['assistantName', 'productName']
})
@Component({
  selector: 'bs-ai-greeting',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['assistantName', 'productName'],
})
export class BsAiGreeting {
  protected el: HTMLBsAiGreetingElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BsAiGreeting extends Components.BsAiGreeting {}


@ProxyCmp({
  defineCustomElementFn: defineBsAiThinking,
  inputs: ['label']
})
@Component({
  selector: 'bs-ai-thinking',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['label'],
})
export class BsAiThinking {
  protected el: HTMLBsAiThinkingElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BsAiThinking extends Components.BsAiThinking {}


@ProxyCmp({
  defineCustomElementFn: defineBsAttachment,
  inputs: ['fileName', 'imageAlt', 'imageSrc', 'loading', 'removable', 'type']
})
@Component({
  selector: 'bs-attachment',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['fileName', 'imageAlt', 'imageSrc', 'loading', 'removable', 'type'],
  outputs: ['bsRemove'],
})
export class BsAttachment {
  protected el: HTMLBsAttachmentElement;
  @Output() bsRemove = new EventEmitter<BsAttachmentCustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { BsAttachmentCustomEvent } from '@brandsync/wc/dist/components';

export declare interface BsAttachment extends Components.BsAttachment {
  /**
   * Fires when the remove button is clicked.
   */
  bsRemove: EventEmitter<BsAttachmentCustomEvent<void>>;
}


@ProxyCmp({
  defineCustomElementFn: defineBsAttachmentList,
  inputs: ['ariaLabel']
})
@Component({
  selector: 'bs-attachment-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabel'],
})
export class BsAttachmentList {
  protected el: HTMLBsAttachmentListElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BsAttachmentList extends Components.BsAttachmentList {}


@ProxyCmp({
  defineCustomElementFn: defineBsAvatar,
  inputs: ['alt', 'ariaLabel', 'disabled', 'initials', 'size', 'src', 'type']
})
@Component({
  selector: 'bs-avatar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alt', 'ariaLabel', 'disabled', 'initials', 'size', 'src', 'type'],
})
export class BsAvatar {
  protected el: HTMLBsAvatarElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BsAvatar extends Components.BsAvatar {}


@ProxyCmp({
  defineCustomElementFn: defineBsBadge,
  inputs: ['variant']
})
@Component({
  selector: 'bs-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['variant'],
})
export class BsBadge {
  protected el: HTMLBsBadgeElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BsBadge extends Components.BsBadge {}


@ProxyCmp({
  defineCustomElementFn: defineBsBreadcrumb,
  inputs: ['current', 'href', 'size']
})
@Component({
  selector: 'bs-breadcrumb',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['current', 'href', 'size'],
})
export class BsBreadcrumb {
  protected el: HTMLBsBreadcrumbElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BsBreadcrumb extends Components.BsBreadcrumb {}


@ProxyCmp({
  defineCustomElementFn: defineBsBreadcrumbOverflow,
  inputs: ['items', 'overflowLabel', 'size']
})
@Component({
  selector: 'bs-breadcrumb-overflow',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['items', 'overflowLabel', 'size'],
})
export class BsBreadcrumbOverflow {
  protected el: HTMLBsBreadcrumbOverflowElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BsBreadcrumbOverflow extends Components.BsBreadcrumbOverflow {}


@ProxyCmp({
  defineCustomElementFn: defineBsBreadcrumbs,
  inputs: ['label', 'size']
})
@Component({
  selector: 'bs-breadcrumbs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['label', 'size'],
})
export class BsBreadcrumbs {
  protected el: HTMLBsBreadcrumbsElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BsBreadcrumbs extends Components.BsBreadcrumbs {}


@ProxyCmp({
  defineCustomElementFn: defineBsButton,
  inputs: ['ariaLabel', 'disabled', 'size', 'type', 'variant']
})
@Component({
  selector: 'bs-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabel', 'disabled', 'size', 'type', 'variant'],
})
export class BsButton {
  protected el: HTMLBsButtonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BsButton extends Components.BsButton {}


@ProxyCmp({
  defineCustomElementFn: defineBsButtonSkeleton,
  inputs: ['size']
})
@Component({
  selector: 'bs-button-skeleton',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class BsButtonSkeleton {
  protected el: HTMLBsButtonSkeletonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BsButtonSkeleton extends Components.BsButtonSkeleton {}


@ProxyCmp({
  defineCustomElementFn: defineBsCard,
  inputs: ['surface']
})
@Component({
  selector: 'bs-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['surface'],
})
export class BsCard {
  protected el: HTMLBsCardElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BsCard extends Components.BsCard {}


@ProxyCmp({
  defineCustomElementFn: defineBsChatbotFeedback,
  inputs: ['comment', 'heading', 'rating', 'submitted', 'subtitle']
})
@Component({
  selector: 'bs-chatbot-feedback',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['comment', 'heading', 'rating', 'submitted', 'subtitle'],
  outputs: ['bsRatingChange', 'bsCommentInput', 'bsSubmit', 'bsNewChat', 'bsClose'],
})
export class BsChatbotFeedback {
  protected el: HTMLBsChatbotFeedbackElement;
  @Output() bsRatingChange = new EventEmitter<BsChatbotFeedbackCustomEvent<number>>();
  @Output() bsCommentInput = new EventEmitter<BsChatbotFeedbackCustomEvent<string>>();
  @Output() bsSubmit = new EventEmitter<BsChatbotFeedbackCustomEvent<{ rating: number; comment: string }>>();
  @Output() bsNewChat = new EventEmitter<BsChatbotFeedbackCustomEvent<void>>();
  @Output() bsClose = new EventEmitter<BsChatbotFeedbackCustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { BsChatbotFeedbackCustomEvent } from '@brandsync/wc/dist/components';

export declare interface BsChatbotFeedback extends Components.BsChatbotFeedback {
  /**
   * Fires when a star is clicked, with the new rating.
   */
  bsRatingChange: EventEmitter<BsChatbotFeedbackCustomEvent<number>>;
  /**
   * Fires on every keystroke in the comment textarea, with the current value.
   */
  bsCommentInput: EventEmitter<BsChatbotFeedbackCustomEvent<string>>;
  /**
   * Fires when "Submit feedback" is clicked, with the current rating and comment. Also sets
`submitted` to true.
   */
  bsSubmit: EventEmitter<BsChatbotFeedbackCustomEvent<{ rating: number; comment: string }>>;
  /**
   * Fires when "Start new chat" is clicked. The consuming app owns actually starting a new chat.
   */
  bsNewChat: EventEmitter<BsChatbotFeedbackCustomEvent<void>>;
  /**
   * Fires when the close button is clicked. The consuming app owns actually hiding the card.
   */
  bsClose: EventEmitter<BsChatbotFeedbackCustomEvent<void>>;
}


@ProxyCmp({
  defineCustomElementFn: defineBsChatbotHeader,
  inputs: ['expanded', 'heading']
})
@Component({
  selector: 'bs-chatbot-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['expanded', 'heading'],
  outputs: ['bsNewChat', 'bsHistory', 'bsExpand', 'bsClose'],
})
export class BsChatbotHeader {
  protected el: HTMLBsChatbotHeaderElement;
  @Output() bsNewChat = new EventEmitter<BsChatbotHeaderCustomEvent<void>>();
  @Output() bsHistory = new EventEmitter<BsChatbotHeaderCustomEvent<void>>();
  @Output() bsExpand = new EventEmitter<BsChatbotHeaderCustomEvent<boolean>>();
  @Output() bsClose = new EventEmitter<BsChatbotHeaderCustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { BsChatbotHeaderCustomEvent } from '@brandsync/wc/dist/components';

export declare interface BsChatbotHeader extends Components.BsChatbotHeader {
  /**
   * Fires when the "New chat" button is clicked.
   */
  bsNewChat: EventEmitter<BsChatbotHeaderCustomEvent<void>>;
  /**
   * Fires when the "History" button is clicked.
   */
  bsHistory: EventEmitter<BsChatbotHeaderCustomEvent<void>>;
  /**
   * Fires when the "Expand"/"Collapse" button is clicked, with the new `expanded` value.
   */
  bsExpand: EventEmitter<BsChatbotHeaderCustomEvent<boolean>>;
  /**
   * Fires when the "Close" button is clicked.
   */
  bsClose: EventEmitter<BsChatbotHeaderCustomEvent<void>>;
}


@ProxyCmp({
  defineCustomElementFn: defineBsChatbotResponseAction,
  inputs: ['menuOpen', 'sourcesCount']
})
@Component({
  selector: 'bs-chatbot-response-action',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['menuOpen', 'sourcesCount'],
  outputs: ['bsLike', 'bsDislike', 'bsCopy', 'bsRegenerate', 'bsMenuOpen', 'bsSourcesClick'],
})
export class BsChatbotResponseAction {
  protected el: HTMLBsChatbotResponseActionElement;
  @Output() bsLike = new EventEmitter<BsChatbotResponseActionCustomEvent<void>>();
  @Output() bsDislike = new EventEmitter<BsChatbotResponseActionCustomEvent<void>>();
  @Output() bsCopy = new EventEmitter<BsChatbotResponseActionCustomEvent<void>>();
  @Output() bsRegenerate = new EventEmitter<BsChatbotResponseActionCustomEvent<void>>();
  @Output() bsMenuOpen = new EventEmitter<BsChatbotResponseActionCustomEvent<boolean>>();
  @Output() bsSourcesClick = new EventEmitter<BsChatbotResponseActionCustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { BsChatbotResponseActionCustomEvent } from '@brandsync/wc/dist/components';

export declare interface BsChatbotResponseAction extends Components.BsChatbotResponseAction {
  /**
   * Fires when the "Like" button is clicked.
   */
  bsLike: EventEmitter<BsChatbotResponseActionCustomEvent<void>>;
  /**
   * Fires when the "Dislike" button is clicked.
   */
  bsDislike: EventEmitter<BsChatbotResponseActionCustomEvent<void>>;
  /**
   * Fires when the "Copy" button is clicked.
   */
  bsCopy: EventEmitter<BsChatbotResponseActionCustomEvent<void>>;
  /**
   * Fires when the "Regenerate" button is clicked.
   */
  bsRegenerate: EventEmitter<BsChatbotResponseActionCustomEvent<void>>;
  /**
   * Fires when the "More options" button is clicked or the menu is closed (click outside,
Escape), with the new `menuOpen` value.
   */
  bsMenuOpen: EventEmitter<BsChatbotResponseActionCustomEvent<boolean>>;
  /**
   * Fires when the "N sources" button is clicked.
   */
  bsSourcesClick: EventEmitter<BsChatbotResponseActionCustomEvent<void>>;
}


@ProxyCmp({
  defineCustomElementFn: defineBsChatbotSourcesDrawer,
  inputs: ['count', 'heading']
})
@Component({
  selector: 'bs-chatbot-sources-drawer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['count', 'heading'],
  outputs: ['bsCollapse'],
})
export class BsChatbotSourcesDrawer {
  protected el: HTMLBsChatbotSourcesDrawerElement;
  @Output() bsCollapse = new EventEmitter<BsChatbotSourcesDrawerCustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { BsChatbotSourcesDrawerCustomEvent } from '@brandsync/wc/dist/components';

export declare interface BsChatbotSourcesDrawer extends Components.BsChatbotSourcesDrawer {
  /**
   * Fires when the collapse chevron is clicked. The consuming app owns actually hiding the panel.
   */
  bsCollapse: EventEmitter<BsChatbotSourcesDrawerCustomEvent<void>>;
}


@ProxyCmp({
  defineCustomElementFn: defineBsChatbotSuggestionButton,
  inputs: ['disabled']
})
@Component({
  selector: 'bs-chatbot-suggestion-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled'],
  outputs: ['bsSelect'],
})
export class BsChatbotSuggestionButton {
  protected el: HTMLBsChatbotSuggestionButtonElement;
  @Output() bsSelect = new EventEmitter<BsChatbotSuggestionButtonCustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { BsChatbotSuggestionButtonCustomEvent } from '@brandsync/wc/dist/components';

export declare interface BsChatbotSuggestionButton extends Components.BsChatbotSuggestionButton {
  /**
   * Fires when the button is clicked.
   */
  bsSelect: EventEmitter<BsChatbotSuggestionButtonCustomEvent<void>>;
}


@ProxyCmp({
  defineCustomElementFn: defineBsCheckbox,
  inputs: ['ariaLabel', 'checked', 'disabled', 'error', 'indeterminate', 'size']
})
@Component({
  selector: 'bs-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabel', 'checked', 'disabled', 'error', 'indeterminate', 'size'],
  outputs: ['bsChange'],
})
export class BsCheckbox {
  protected el: HTMLBsCheckboxElement;
  @Output() bsChange = new EventEmitter<BsCheckboxCustomEvent<boolean>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { BsCheckboxCustomEvent } from '@brandsync/wc/dist/components';

export declare interface BsCheckbox extends Components.BsCheckbox {
  /**
   * Emitted when the checked state changes via user interaction, with the new `checked` value.
   */
  bsChange: EventEmitter<BsCheckboxCustomEvent<boolean>>;
}


@ProxyCmp({
  defineCustomElementFn: defineBsCheckboxSkeleton,
  inputs: ['size']
})
@Component({
  selector: 'bs-checkbox-skeleton',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class BsCheckboxSkeleton {
  protected el: HTMLBsCheckboxSkeletonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BsCheckboxSkeleton extends Components.BsCheckboxSkeleton {}


@ProxyCmp({
  defineCustomElementFn: defineBsChipFilter,
  inputs: ['ariaLabel', 'disabled', 'dropdown', 'selected', 'size']
})
@Component({
  selector: 'bs-chip-filter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabel', 'disabled', 'dropdown', 'selected', 'size'],
  outputs: ['bsChange'],
})
export class BsChipFilter {
  protected el: HTMLBsChipFilterElement;
  @Output() bsChange = new EventEmitter<BsChipFilterCustomEvent<boolean>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { BsChipFilterCustomEvent } from '@brandsync/wc/dist/components';

export declare interface BsChipFilter extends Components.BsChipFilter {
  /**
   * Emitted when `selected` changes via user interaction, with the new value.
   */
  bsChange: EventEmitter<BsChipFilterCustomEvent<boolean>>;
}


@ProxyCmp({
  defineCustomElementFn: defineBsChipInformative,
  inputs: ['color', 'disabled', 'size']
})
@Component({
  selector: 'bs-chip-informative',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'disabled', 'size'],
})
export class BsChipInformative {
  protected el: HTMLBsChipInformativeElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BsChipInformative extends Components.BsChipInformative {}


@ProxyCmp({
  defineCustomElementFn: defineBsChipInput,
  inputs: ['disabled', 'selected', 'size']
})
@Component({
  selector: 'bs-chip-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'selected', 'size'],
  outputs: ['bsChange', 'bsRemove'],
})
export class BsChipInput {
  protected el: HTMLBsChipInputElement;
  @Output() bsChange = new EventEmitter<BsChipInputCustomEvent<boolean>>();
  @Output() bsRemove = new EventEmitter<BsChipInputCustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { BsChipInputCustomEvent } from '@brandsync/wc/dist/components';

export declare interface BsChipInput extends Components.BsChipInput {
  /**
   * Emitted when `selected` changes via clicking the body, with the new value.
   */
  bsChange: EventEmitter<BsChipInputCustomEvent<boolean>>;
  /**
   * Emitted when the remove button is clicked. No payload -- unlike bs-input's own chip-entry
mode (which tracks a `chips: string[]` array internally and can identify which string was
removed), a standalone chip doesn't know its own "value" to a consumer; whatever's rendering
a list of these already has that context via closure/key.
   */
  bsRemove: EventEmitter<BsChipInputCustomEvent<void>>;
}


@ProxyCmp({
  defineCustomElementFn: defineBsComposer,
  inputs: ['ariaLabel', 'placeholder', 'state', 'value', 'variant']
})
@Component({
  selector: 'bs-composer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabel', 'placeholder', 'state', 'value', 'variant'],
  outputs: ['bsInput', 'bsSubmit', 'bsStop', 'bsVoiceConfirm', 'bsAttach', 'bsMicToggle'],
})
export class BsComposer {
  protected el: HTMLBsComposerElement;
  @Output() bsInput = new EventEmitter<BsComposerCustomEvent<string>>();
  @Output() bsSubmit = new EventEmitter<BsComposerCustomEvent<void>>();
  @Output() bsStop = new EventEmitter<BsComposerCustomEvent<void>>();
  @Output() bsVoiceConfirm = new EventEmitter<BsComposerCustomEvent<void>>();
  @Output() bsAttach = new EventEmitter<BsComposerCustomEvent<void>>();
  @Output() bsMicToggle = new EventEmitter<BsComposerCustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { BsComposerCustomEvent } from '@brandsync/wc/dist/components';

export declare interface BsComposer extends Components.BsComposer {
  /**
   * Fires on every keystroke in the text field, with the current value.
   */
  bsInput: EventEmitter<BsComposerCustomEvent<string>>;
  /**
   * Fires when the primary action button is clicked while `state="idle"`.
   */
  bsSubmit: EventEmitter<BsComposerCustomEvent<void>>;
  /**
   * Fires when the primary action button is clicked while `state="generating"`.
   */
  bsStop: EventEmitter<BsComposerCustomEvent<void>>;
  /**
   * Fires when the primary action button is clicked while `state="recording"`.
   */
  bsVoiceConfirm: EventEmitter<BsComposerCustomEvent<void>>;
  /**
   * Fires when the "+" attach button is clicked.
   */
  bsAttach: EventEmitter<BsComposerCustomEvent<void>>;
  /**
   * Fires when the mic/stop-recording button is clicked. The consumer decides what that means
(e.g. start recording when idle/generating, or stop recording when `state="recording"`).
   */
  bsMicToggle: EventEmitter<BsComposerCustomEvent<void>>;
}


@ProxyCmp({
  defineCustomElementFn: defineBsComposerStatusBanner,
  inputs: ['actionLabel', 'allowClose', 'message', 'showButton', 'showIcon', 'type']
})
@Component({
  selector: 'bs-composer-status-banner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['actionLabel', 'allowClose', 'message', 'showButton', 'showIcon', 'type'],
  outputs: ['bsAction', 'bsClose'],
})
export class BsComposerStatusBanner {
  protected el: HTMLBsComposerStatusBannerElement;
  @Output() bsAction = new EventEmitter<BsComposerStatusBannerCustomEvent<void>>();
  @Output() bsClose = new EventEmitter<BsComposerStatusBannerCustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { BsComposerStatusBannerCustomEvent } from '@brandsync/wc/dist/components';

export declare interface BsComposerStatusBanner extends Components.BsComposerStatusBanner {
  /**
   * Fires when the action button is clicked. Only relevant when `showButton` is true.
   */
  bsAction: EventEmitter<BsComposerStatusBannerCustomEvent<void>>;
  /**
   * Fires when the close button is clicked. Only relevant when `allowClose` is true.
   */
  bsClose: EventEmitter<BsComposerStatusBannerCustomEvent<void>>;
}


@ProxyCmp({
  defineCustomElementFn: defineBsDataTable,
  inputs: ['cellRenderer', 'columns', 'rows', 'selectable', 'sortColumn', 'sortDirection']
})
@Component({
  selector: 'bs-data-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['cellRenderer', 'columns', 'rows', 'selectable', 'sortColumn', 'sortDirection'],
  outputs: ['bsSort', 'bsRowSelect'],
})
export class BsDataTable {
  protected el: HTMLBsDataTableElement;
  @Output() bsSort = new EventEmitter<BsDataTableCustomEvent<{ column: string; direction: 'asc' | 'desc' }>>();
  @Output() bsRowSelect = new EventEmitter<BsDataTableCustomEvent<{ id: string | number; selected: boolean }>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { BsDataTableCustomEvent } from '@brandsync/wc/dist/components';

export declare interface BsDataTable extends Components.BsDataTable {

  bsSort: EventEmitter<BsDataTableCustomEvent<{ column: string; direction: 'asc' | 'desc' }>>;

  bsRowSelect: EventEmitter<BsDataTableCustomEvent<{ id: string | number; selected: boolean }>>;
}


@ProxyCmp({
  defineCustomElementFn: defineBsDialog,
  inputs: ['centered', 'heading', 'open', 'size']
})
@Component({
  selector: 'bs-dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['centered', 'heading', 'open', 'size'],
  outputs: ['bsClose'],
})
export class BsDialog {
  protected el: HTMLBsDialogElement;
  @Output() bsClose = new EventEmitter<BsDialogCustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { BsDialogCustomEvent } from '@brandsync/wc/dist/components';

export declare interface BsDialog extends Components.BsDialog {

  bsClose: EventEmitter<BsDialogCustomEvent<void>>;
}


@ProxyCmp({
  defineCustomElementFn: defineBsIconButton,
  inputs: ['ariaLabel', 'disabled', 'size', 'type', 'variant']
})
@Component({
  selector: 'bs-icon-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabel', 'disabled', 'size', 'type', 'variant'],
})
export class BsIconButton {
  protected el: HTMLBsIconButtonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BsIconButton extends Components.BsIconButton {}


@ProxyCmp({
  defineCustomElementFn: defineBsInlineTab,
  inputs: ['ariaLabel', 'disabled', 'selected']
})
@Component({
  selector: 'bs-inline-tab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabel', 'disabled', 'selected'],
  outputs: ['bsSelect'],
})
export class BsInlineTab {
  protected el: HTMLBsInlineTabElement;
  @Output() bsSelect = new EventEmitter<BsInlineTabCustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { BsInlineTabCustomEvent } from '@brandsync/wc/dist/components';

export declare interface BsInlineTab extends Components.BsInlineTab {
  /**
   * Fires when the tab is clicked. Does not toggle `selected` itself -- see the class JSDoc.
   */
  bsSelect: EventEmitter<BsInlineTabCustomEvent<void>>;
}


@ProxyCmp({
  defineCustomElementFn: defineBsInput,
  inputs: ['chips', 'country', 'countryOptions', 'description', 'disabled', 'error', 'initialsTitle', 'label', 'length', 'max', 'min', 'open', 'options', 'placeholder', 'required', 'rows', 'step', 'titleOptions', 'type', 'value']
})
@Component({
  selector: 'bs-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['chips', 'country', 'countryOptions', 'description', 'disabled', 'error', 'initialsTitle', 'label', 'length', 'max', 'min', 'open', 'options', 'placeholder', 'required', 'rows', 'step', 'titleOptions', 'type', 'value'],
  outputs: ['bsInput', 'bsChange', 'bsOpen', 'bsChipAdd', 'bsChipRemove', 'bsTitleChange', 'bsCountryChange'],
})
export class BsInput {
  protected el: HTMLBsInputElement;
  @Output() bsInput = new EventEmitter<BsInputCustomEvent<string>>();
  @Output() bsChange = new EventEmitter<BsInputCustomEvent<string>>();
  @Output() bsOpen = new EventEmitter<BsInputCustomEvent<boolean>>();
  @Output() bsChipAdd = new EventEmitter<BsInputCustomEvent<string>>();
  @Output() bsChipRemove = new EventEmitter<BsInputCustomEvent<string>>();
  @Output() bsTitleChange = new EventEmitter<BsInputCustomEvent<string>>();
  @Output() bsCountryChange = new EventEmitter<BsInputCustomEvent<string>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { BsInputCustomEvent } from '@brandsync/wc/dist/components';

export declare interface BsInput extends Components.BsInput {

  bsInput: EventEmitter<BsInputCustomEvent<string>>;

  bsChange: EventEmitter<BsInputCustomEvent<string>>;
  /**
   * Emitted when `type="dropdown"`'s trigger is toggled. See `open`'s doc comment for this type's
shell-only limitation.
   */
  bsOpen: EventEmitter<BsInputCustomEvent<boolean>>;
  /**
   * Emitted when a chip is committed (Enter pressed in the draft input) for `type="chip"`.
   */
  bsChipAdd: EventEmitter<BsInputCustomEvent<string>>;
  /**
   * Emitted when a chip's remove button is clicked for `type="chip"`.
   */
  bsChipRemove: EventEmitter<BsInputCustomEvent<string>>;
  /**
   * Emitted when the title `<select>` changes for `type="initials"`.
   */
  bsTitleChange: EventEmitter<BsInputCustomEvent<string>>;
  /**
   * Emitted when the country `<select>` changes for `type="country"`.
   */
  bsCountryChange: EventEmitter<BsInputCustomEvent<string>>;
}


@ProxyCmp({
  defineCustomElementFn: defineBsLogo,
  inputs: ['alt', 'background', 'src', 'variant']
})
@Component({
  selector: 'bs-logo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alt', 'background', 'src', 'variant'],
})
export class BsLogo {
  protected el: HTMLBsLogoElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BsLogo extends Components.BsLogo {}


@ProxyCmp({
  defineCustomElementFn: defineBsMenu
})
@Component({
  selector: 'bs-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class BsMenu {
  protected el: HTMLBsMenuElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BsMenu extends Components.BsMenu {}


@ProxyCmp({
  defineCustomElementFn: defineBsMenuItem,
  inputs: ['disabled']
})
@Component({
  selector: 'bs-menu-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled'],
  outputs: ['bsSelect'],
})
export class BsMenuItem {
  protected el: HTMLBsMenuItemElement;
  @Output() bsSelect = new EventEmitter<BsMenuItemCustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { BsMenuItemCustomEvent } from '@brandsync/wc/dist/components';

export declare interface BsMenuItem extends Components.BsMenuItem {
  /**
   * Fires when the item is clicked.
   */
  bsSelect: EventEmitter<BsMenuItemCustomEvent<void>>;
}


@ProxyCmp({
  defineCustomElementFn: defineBsNavigationDrawer,
  inputs: ['collapsed', 'collapsible', 'heading', 'logoBackground', 'showLogo']
})
@Component({
  selector: 'bs-navigation-drawer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['collapsed', 'collapsible', 'heading', 'logoBackground', 'showLogo'],
  outputs: ['bsCollapse', 'bsSearchClick'],
})
export class BsNavigationDrawer {
  protected el: HTMLBsNavigationDrawerElement;
  @Output() bsCollapse = new EventEmitter<BsNavigationDrawerCustomEvent<boolean>>();
  @Output() bsSearchClick = new EventEmitter<BsNavigationDrawerCustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { BsNavigationDrawerCustomEvent } from '@brandsync/wc/dist/components';

export declare interface BsNavigationDrawer extends Components.BsNavigationDrawer {
  /**
   * Fires with the new `collapsed` value when the collapse toggle button is clicked.
   */
  bsCollapse: EventEmitter<BsNavigationDrawerCustomEvent<boolean>>;
  /**
   * Fires when the compact search-trigger button (shown instead of the `search` slot while
`collapsed`) is clicked -- e.g. to open a full search overlay. This component has no
visibility into what the `search` slot actually contains, so it can't drive a real search
itself once shrunk to icon size.
   */
  bsSearchClick: EventEmitter<BsNavigationDrawerCustomEvent<void>>;
}


@ProxyCmp({
  defineCustomElementFn: defineBsNavigationDrawerItem,
  inputs: ['ariaLabel', 'collapsed', 'expandable', 'expanded', 'nested', 'selected']
})
@Component({
  selector: 'bs-navigation-drawer-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabel', 'collapsed', 'expandable', 'expanded', 'nested', 'selected'],
  outputs: ['bsSelect', 'bsToggle'],
})
export class BsNavigationDrawerItem {
  protected el: HTMLBsNavigationDrawerItemElement;
  @Output() bsSelect = new EventEmitter<BsNavigationDrawerItemCustomEvent<void>>();
  @Output() bsToggle = new EventEmitter<BsNavigationDrawerItemCustomEvent<boolean>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { BsNavigationDrawerItemCustomEvent } from '@brandsync/wc/dist/components';

export declare interface BsNavigationDrawerItem extends Components.BsNavigationDrawerItem {
  /**
   * Fires on click, only when `expandable` is false. See the class doc above.
   */
  bsSelect: EventEmitter<BsNavigationDrawerItemCustomEvent<void>>;
  /**
   * Fires with the new `expanded` value on click, only when `expandable` is true. See the class
doc above.
   */
  bsToggle: EventEmitter<BsNavigationDrawerItemCustomEvent<boolean>>;
}


@ProxyCmp({
  defineCustomElementFn: defineBsNavigationHeader,
  inputs: ['alignment', 'ariaLabel', 'logoBackground', 'skipToContentHref', 'skipToContentLabel']
})
@Component({
  selector: 'bs-navigation-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alignment', 'ariaLabel', 'logoBackground', 'skipToContentHref', 'skipToContentLabel'],
})
export class BsNavigationHeader {
  protected el: HTMLBsNavigationHeaderElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BsNavigationHeader extends Components.BsNavigationHeader {}


@ProxyCmp({
  defineCustomElementFn: defineBsPagination,
  inputs: ['currentPage', 'nextLabel', 'previousLabel', 'siblingCount', 'totalPages']
})
@Component({
  selector: 'bs-pagination',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['currentPage', 'nextLabel', 'previousLabel', 'siblingCount', 'totalPages'],
  outputs: ['bsPageChange'],
})
export class BsPagination {
  protected el: HTMLBsPaginationElement;
  @Output() bsPageChange = new EventEmitter<BsPaginationCustomEvent<number>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { BsPaginationCustomEvent } from '@brandsync/wc/dist/components';

export declare interface BsPagination extends Components.BsPagination {
  /**
   * Fires whenever the active page changes as a result of the user clicking a page/prev/next
button -- not when `currentPage` is set programmatically from outside.
   */
  bsPageChange: EventEmitter<BsPaginationCustomEvent<number>>;
}


@ProxyCmp({
  defineCustomElementFn: defineBsRadio,
  inputs: ['checked', 'disabled', 'name', 'value']
})
@Component({
  selector: 'bs-radio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'name', 'value'],
  outputs: ['bsChange'],
})
export class BsRadio {
  protected el: HTMLBsRadioElement;
  @Output() bsChange = new EventEmitter<BsRadioCustomEvent<string>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { BsRadioCustomEvent } from '@brandsync/wc/dist/components';

export declare interface BsRadio extends Components.BsRadio {
  /**
   * Emitted with this radio's own `value` when it becomes checked via user interaction. Since
native same-`name` grouping doesn't cross shadow-root boundaries (see the `name` prop's doc),
a consumer wiring up a group of `bs-radio`s must itself set `checked = false` on the others in
response to this event -- there's no automatic un-checking to rely on here.
   */
  bsChange: EventEmitter<BsRadioCustomEvent<string>>;
}


@ProxyCmp({
  defineCustomElementFn: defineBsSlider,
  inputs: ['ariaLabel', 'disabled', 'label', 'max', 'min', 'segments', 'showLabel', 'step', 'type', 'value', 'valueEnd', 'valueStart']
})
@Component({
  selector: 'bs-slider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabel', 'disabled', 'label', 'max', 'min', 'segments', 'showLabel', 'step', 'type', 'value', 'valueEnd', 'valueStart'],
  outputs: ['bsChange', 'bsRangeChange'],
})
export class BsSlider {
  protected el: HTMLBsSliderElement;
  @Output() bsChange = new EventEmitter<BsSliderCustomEvent<number>>();
  @Output() bsRangeChange = new EventEmitter<BsSliderCustomEvent<{ start: number; end: number }>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { BsSliderCustomEvent } from '@brandsync/wc/dist/components';

export declare interface BsSlider extends Components.BsSlider {
  /**
   * Emitted when `value` changes via user interaction (dragging the thumb, or committing the
value field), with the new value. Only fires for `type="default"`/`type="segmented"`.
   */
  bsChange: EventEmitter<BsSliderCustomEvent<number>>;
  /**
   * Emitted when `valueStart`/`valueEnd` changes via user interaction, with both current values.
Only fires for `type="range"`.
   */
  bsRangeChange: EventEmitter<BsSliderCustomEvent<{ start: number; end: number }>>;
}


@ProxyCmp({
  defineCustomElementFn: defineBsSnackbar,
  inputs: ['actionLabel', 'loading', 'variant']
})
@Component({
  selector: 'bs-snackbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['actionLabel', 'loading', 'variant'],
  outputs: ['bsAction', 'bsDismiss'],
})
export class BsSnackbar {
  protected el: HTMLBsSnackbarElement;
  @Output() bsAction = new EventEmitter<BsSnackbarCustomEvent<void>>();
  @Output() bsDismiss = new EventEmitter<BsSnackbarCustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { BsSnackbarCustomEvent } from '@brandsync/wc/dist/components';

export declare interface BsSnackbar extends Components.BsSnackbar {
  /**
   * Fires when the action button is clicked. Ignored/never fires if `actionLabel` isn't set.
   */
  bsAction: EventEmitter<BsSnackbarCustomEvent<void>>;
  /**
   * Fires when the close button is clicked. This component doesn't remove itself from the DOM --
the consumer is expected to do that (or hide it) in response to this event.
   */
  bsDismiss: EventEmitter<BsSnackbarCustomEvent<void>>;
}


@ProxyCmp({
  defineCustomElementFn: defineBsSourceLink,
  inputs: ['fileName', 'href', 'sourceName', 'target', 'version']
})
@Component({
  selector: 'bs-source-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['fileName', 'href', 'sourceName', 'target', 'version'],
  outputs: ['bsOpen'],
})
export class BsSourceLink {
  protected el: HTMLBsSourceLinkElement;
  @Output() bsOpen = new EventEmitter<BsSourceLinkCustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { BsSourceLinkCustomEvent } from '@brandsync/wc/dist/components';

export declare interface BsSourceLink extends Components.BsSourceLink {
  /**
   * Fires on click/activation, whether or not `href` is set -- lets the consuming app log or handle the open.
   */
  bsOpen: EventEmitter<BsSourceLinkCustomEvent<void>>;
}


@ProxyCmp({
  defineCustomElementFn: defineBsStepper,
  inputs: ['currentStep', 'direction', 'showDescription']
})
@Component({
  selector: 'bs-stepper',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['currentStep', 'direction', 'showDescription'],
})
export class BsStepper {
  protected el: HTMLBsStepperElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BsStepper extends Components.BsStepper {}


@ProxyCmp({
  defineCustomElementFn: defineBsStepperStep,
  inputs: ['computedState', 'description', 'direction', 'disabled', 'error', 'name', 'showDescription']
})
@Component({
  selector: 'bs-stepper-step',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['computedState', 'description', 'direction', 'disabled', 'error', 'name', 'showDescription'],
})
export class BsStepperStep {
  protected el: HTMLBsStepperStepElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BsStepperStep extends Components.BsStepperStep {}


@ProxyCmp({
  defineCustomElementFn: defineBsSwitch,
  inputs: ['ariaLabel', 'checked', 'disabled', 'size']
})
@Component({
  selector: 'bs-switch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabel', 'checked', 'disabled', 'size'],
  outputs: ['bsChange'],
})
export class BsSwitch {
  protected el: HTMLBsSwitchElement;
  @Output() bsChange = new EventEmitter<BsSwitchCustomEvent<boolean>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { BsSwitchCustomEvent } from '@brandsync/wc/dist/components';

export declare interface BsSwitch extends Components.BsSwitch {
  /**
   * Emitted when the checked state changes via user interaction, with the new `checked` value.
   */
  bsChange: EventEmitter<BsSwitchCustomEvent<boolean>>;
}


@ProxyCmp({
  defineCustomElementFn: defineBsTab,
  inputs: ['ariaLabel', 'disabled', 'iconPosition', 'selected']
})
@Component({
  selector: 'bs-tab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabel', 'disabled', 'iconPosition', 'selected'],
  outputs: ['bsSelect'],
})
export class BsTab {
  protected el: HTMLBsTabElement;
  @Output() bsSelect = new EventEmitter<BsTabCustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { BsTabCustomEvent } from '@brandsync/wc/dist/components';

export declare interface BsTab extends Components.BsTab {
  /**
   * Fires when the tab is clicked. Does not toggle `selected` itself -- see the class JSDoc.
   */
  bsSelect: EventEmitter<BsTabCustomEvent<void>>;
}


@ProxyCmp({
  defineCustomElementFn: defineBsTabs,
  inputs: ['orientation', 'type']
})
@Component({
  selector: 'bs-tabs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['orientation', 'type'],
})
export class BsTabs {
  protected el: HTMLBsTabsElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BsTabs extends Components.BsTabs {}


@ProxyCmp({
  defineCustomElementFn: defineBsTooltip,
  inputs: ['placement']
})
@Component({
  selector: 'bs-tooltip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['placement'],
})
export class BsTooltip {
  protected el: HTMLBsTooltipElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BsTooltip extends Components.BsTooltip {}


