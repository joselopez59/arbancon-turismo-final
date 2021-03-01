import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SuperTabs } from '@ionic-super-tabs/angular';
import { AnimationController, IonSlides } from '@ionic/angular';

import { ActividadesService } from '../actividades.service';
import { getTestBed } from '@angular/core/testing';

@Component({
  selector: 'app-actividad-detail',
  templateUrl: './actividad-detail.component.html',
  styleUrls: ['./actividad-detail.component.scss'],
})
export class ActividadDetailComponent implements OnInit, OnDestroy {

  actividad: any = '';
  imgURL = '';
  showSuperTabs = false;

  @ViewChild('imageTop', { read: ElementRef }) imageTop: ElementRef;
  @ViewChild('slides') slides: IonSlides;

  slideOpts = {
    on: {
      beforeInit() {
        const swiper = this;
        swiper.classNames.push(`${swiper.params.containerModifierClass}fade`);
        const overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true,
        };
        swiper.params = Object.assign(swiper.params, overwriteParams);
        swiper.params = Object.assign(swiper.originalParams, overwriteParams);
      },
      setTranslate() {
        const swiper = this;
        const { slides } = swiper;
        for (let i = 0; i < slides.length; i += 1) {
          const $slideEl = swiper.slides.eq(i);
          const offset$$1 = $slideEl[0].swiperSlideOffset;
          let tx = -offset$$1;
          if (!swiper.params.virtualTranslate) {tx -= swiper.translate; }
          let ty = 0;
          if (!swiper.isHorizontal()) {
            ty = tx;
            tx = 0;
          }
          const slideOpacity = swiper.params.fadeEffect.crossFade
            ? Math.max(1 - Math.abs($slideEl[0].progress), 0)
            : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
          $slideEl
            .css({
              opacity: slideOpacity,
            })
            .transform(`translate3d(${tx}px, ${ty}px, 0px)`);
        }
      },
      setTransition(duration) {
        const swiper = this;
        const { slides, $wrapperEl } = swiper;
        slides.transition(duration);
        if (swiper.params.virtualTranslate && duration !== 0) {
          let eventTriggered = false;
          slides.transitionEnd(() => {
            if (eventTriggered) {return; }
            if (!swiper || swiper.destroyed) {return; }
            eventTriggered = true;
            swiper.animating = false;
            const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
            // tslint:disable-next-line: prefer-for-of
            for (let i = 0; i < triggerEvents.length; i += 1) {
              $wrapperEl.trigger(triggerEvents[i]);
            }
          });
        }
      },
    },
    allowTouchMove: false
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private actividadesService: ActividadesService,
    private animationCtrl: AnimationController
  ) { }

  ngOnInit() {
    // console.log('ngOnInit');
    // if (this.slides) {
    //   console.log('this.slides');
    // } else
    // {
    //   console.log('keine slides');
    // }

    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.actividadesService.getActividad(id)
      .subscribe(result => {
        this.actividad = result.data.actividad;
        // console.log(this.actividad);
        this.imgURL = result.data.actividad.detail_img.url;
        if (this.actividad.actividadSegments.length !== 0)  {
          this.showSuperTabs = true;
          // this.slides.getSwiper()
          //   .then(() => { console.log('slides getSwiper'); });
        }
      });
  }

  ionViewDidEnter() {
    // console.log('ionViewDidEnter');
    // if (this.slides) {
    //   console.log('this.slides');
    // } else
    // {
    //   console.log('keine slides');
    // }
    // this.slides.getSwiper()
    //   .then(() => {
    //     console.log('slides getSwiper');
    //   });
  }

  onTabChange(event) {
    console.log('onTabChange');
    this.slides.slideTo(event.detail.index);
    this.slides.getActiveIndex()
     .then((index) => { console.log('slide index:', index); });

    // this.slides.getSwiper()
    //  .then(() => { console.log('slides getSwiper', this.slides ); });
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');

    // if (this.slides) {
    //   console.log('this.slides ngOnDestroy');
    //   this.slides.update()
    //     .then(() => { console.log('update'); });
    // }
  }
}
