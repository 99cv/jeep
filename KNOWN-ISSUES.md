# Jeep Known Issues

## 0.0.3 (2020-03-09)

### Component Library

* Linechart on Android flicking when snapping for a vertex label seems to happen only on virtual devices.  
* Carousel on IOS navigation arrows hidden issue
* HTMLPrint does not work for Ionic/Angular App on IOS and Android Devices but works for PWA app on IOS and Android Devices

### IonicAngularApps

* Component jeep-flipimages doesn't work. the hostEl.createShadowRoot function has been removed from core.js since beginning of March. So you have to move to Ionic 5 and Angular 9 where it is working fine.