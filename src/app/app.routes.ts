import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        loadComponent :() => import("./pages/page-home-container/page-home-container.component").then(m => m.PageHomeContainerComponent)
    },
    {
        path: "contactez-nous",
        loadComponent :() => import("./pages/page-contact-container/page-contact-container.component").then(m => m.PageContactContainerComponent)
    }
];
