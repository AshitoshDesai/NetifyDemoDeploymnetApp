import { ProductComponent } from './product/product.component';
import { CompanyComponent } from './company/company.component';
import { ContactComponent } from './contact/contact.component';
import { AppComponent } from '../app.component';

export const routes = [

    { path: '', redirectTo: '/product', pathMatch: 'full' },
    { path: '', component: AppComponent,
    children: [
        { path: 'product',component: ProductComponent},
        { path: 'company',component: CompanyComponent},
        { path: 'contact',component: ContactComponent}
    ]},

    // Not found
    { path: '**', redirectTo: '' }
]