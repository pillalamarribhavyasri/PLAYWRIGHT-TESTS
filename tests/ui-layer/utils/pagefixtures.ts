import {test as base,expect} from "@playwright/test"
import { CustomerPage } from "../Pages/customerpage"
import { LoginPage } from "../Pages/loginpage"
import { Dashboardpage} from "../Pages/dashboardpage"
import { DeleteCustomerPage } from "../Pages/deletecustomerpage"
import dotenv from 'dotenv'
 type MyPageFixtures={
    loginpage:LoginPage,
    customerpage:CustomerPage,
    deletecustomerpage:DeleteCustomerPage,
    dashboardpage:Dashboardpage,
    // age:number
 }
 export const test=base.extend<MyPageFixtures>(
//    { age:async({},use)=>{
//         await use(20)
//     },
{
        loginpage:async({page},use)=>{
            const lp=new LoginPage(page)
            lp.doLogin(process.env.GURU99_USERNAME!,process.env.GURU99_PASSWORD!)
            await use(lp)
        },
        customerpage:async({page},use)=>{
            const cp=new CustomerPage(page)
            await use(cp)
        },
        deletecustomerpage:async({page},use)=>{
            const dp=new DeleteCustomerPage(page)
            await use(dp)
        },
        dashboardpage:async({page},use)=>{
            const dashboardpage=new Dashboardpage(page)
            await use(dashboardpage)
        }

    }
 )