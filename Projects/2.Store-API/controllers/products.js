const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({})
    .select("price name")
    .limit(10)
    .skip(2);
  res.status(200).json({ products, Count: products.length });
};

const getAllProducts = async (req, res) => {
  // console.log(req.query);
  const { featured, company, name, sort, fields, numericFilters } = req.query;
  const queryObject = {};
  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  if (numericFilters) {
    const options = ["price", "rating"];
    const operatorMap = {
      ">": "$gt",
      ">=": "$gte",
      "<": "$lt",
      "<=": "$lte",
      "=": "$eq",
    };
    const regEx = /\b(<|>|>=|<=|=)\b/g;
    let filters = numericFilters.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    );
    filters = filters.split(",").forEach((item) => {
      const [field, operator, value] = item.split("-");
      if (options.includes(field)) {
        queryObject[field] = { [operator]: Number(value) };
      }
    });
    // console.log(filters);
  }
  // console.log(queryObject);
  let result = Product.find(queryObject);
  //sort
  if (sort) {
    const sortList = sort.split(",").join(" ");
    // console.log(sortList);
    result = result.sort(sortList);
  } else {
    result = result.sort("createdAt");
  }

  //Fields
  if (fields) {
    const fieldsList = fields.split(",").join(" ");
    result = result.select(fieldsList);
  }

  //Pagination
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  result = result.skip(skip).limit(limit);

  // console.log(req.query);
  console.log(queryObject);
  const products = await result;
  res.status(200).json({ products, Count: products.length });
};

module.exports = { getAllProducts, getAllProductsStatic };
