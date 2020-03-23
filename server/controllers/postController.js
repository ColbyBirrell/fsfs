module.exports = {
  getProducts: async (req, res) => {
    const db = req.app.get("db");

    let allProducts = await db.get_products();
    if (allProducts !== []) {
      res.status(200).send(allProducts);
    } else {
      res.status(404).send("Products not found");
    }
  },

  getUserProducts: async (req, res) => {
    const { id } = req.params;
    const db = req.app.get("db");

    let allProducts = await db.get_user_products([id]);
    if (allProducts !== []) {
      res.status(200).send(allProducts);
    } else {
      res.status(404).send("Products not found");
    }
  },

  createProducts: async (req, res) => {
    const { prod_name, prod_img, prod_description, price, user_id } = req.body;
    const db = req.app.get("db");

    await db.create_products({
      prod_name,
      prod_img,
      prod_description,
      price,
      user_id
    });
    res.status(200).send("product created successfully");
  },

  editProducts: (req, res) => {
    // console.log("hit edit");
    const db = req.app.get("db");
    // const { id } = req.params;
    const id = +req.params.id;
    const { prod_name, price, prod_description } = req.body;
    // console.log(typeof id, prod_name, price, prod_description);
    db.update_products({ prod_name, price, prod_description, id })
      .then(() => res.sendStatus(200))
      .catch(err => res.status(500).send(err));
  },

  deleteProducts: async (req, res) => {
    const { id } = req.params;
    const db = req.app.get("db");

    await db.delete_products([id]);
    res.status(200).send("deleted successfully");
  }
};
