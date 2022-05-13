const { Product, User } = require("../models");

class productsContollers {
  static async getAllProducts(req, res) {
    //read
    try {
      const products = await Product.findAll();
      res.status(200).json({ products, login: req.user });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async postProducts(req, res) {
    //create
    try {
      const { title, price, quantity, status } = req.body;

      const products = await Product.create({
        title,
        price,
        quantity,
        status,
      });

      res.status(201).json(products);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async deleteProducts(req, res) {
    //delete
    try {
      const product = await Product.findByPk(+req.params.productId);

      if (!product) {
        res.status(400).json({ message: "Product not found" });
      } else {
        await Product.destroy({
          where: {
            id: +req.params.productId,
          },
        });

        res.status(200).json({ message: "Products success to delete" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async updateProduct(req, res) {
    try {
      const { title, price, quantity, status } = req.body;
      const product = await Product.findByPk(+req.params.productId);

      if (!product) {
        res.status(400).json({ message: "Product not found" });
      } else {
        const update = await Product.update(
          {
            title,
            price,
            quantity,
            status,
          },
          {
            where: {
              id: +req.params.productId,
            },
            returning: true
          }
        );

        res.status(200).json(update[1]);
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

module.exports = productsContollers;
