import { Request, Response } from "express";
import {
  okRes,
  errRes,
  getOTP,
  hashMyPassword,
  comparePassword,
} from "../../helpers/tools";
import * as validate from "validate.js";
import validation from "../../helpers/validation.helper";
import PhoneFormat from "../../helpers/phone.helper";
import * as jwt from "jsonwebtoken";
import config from "../../config";
import { async } from "validate.js";
import { Product } from "../../src/entity/product";
import { Invoice } from "../../src/entity/Invoice";
import { InvoiceItem } from "../../src/entity/InvoiceItem";
import { Category } from "../../src/entity/Category";

export default class AdminController {
  static async makeCategory(req, res): Promise<object> {
    let isNotValid = validate(req.body, validation.makeCategory());
    if (isNotValid) return errRes(res, isNotValid);
    let title = req.body.title
    let category: any;
    category = await Category.findOne({ where: { title: title } });
    if (category) return errRes(res, `Category already exists`);

    category = await Category.create({
      ...req.body,
      active: true,
    });
    await category.save()
    return okRes(res, { data: { category } });
  }


  static async makeProduct(req, res): Promise<object> {
    let isNotValid = validate(req.body, validation.makeProduct());
    if (isNotValid) return errRes(res, isNotValid);
    
   let product:any 
   product = await Product.create({
      ...req.body,
      active: true,
    });
    await product.save()
    return okRes(res, { data: { product } });
  }
}


//TODO: why must i say   var:any instead of declaring and defining it directly?