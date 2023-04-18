import { Router, Request, Response } from "express";
// import axios from '@'

const router = Router();

router.get("/",  (req: Request, res: Response): void=>{

  const a = async function () {
    const result = await fetch('https://fakestoreapi.com/products');
    // console.log(res);
    const data = await result.json();
res.send(data)
  };
  a();
});

export { router };