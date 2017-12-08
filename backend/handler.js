const shortid = require("shortid");
const AWS = require("aws-sdk");
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.create = (event, context, callback) => {
  const data = JSON.parse(event.body);
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      id: shortid.generate(),
      type: data.type,
      url: data.url
    }
  };
  dynamoDb.put(params, error => {
    if (error) {
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: {
          "Content-Type": "text/plain",
          "Access-Control-Allow-Origin": "*"
        },
        body: "Couldn't create a meeting"
      });
    }
    return;
  });
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify(params.Item)
  };
  callback(null, response);
};

module.exports.get = (event, context, callback) => {
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Key: {
      id: event.pathParameters.id
    }
  };
  console.log(params);
  dynamoDb.get(params, (error, result) => {
    console.log(result);
    if (error) {
      console.log(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: {
          "Content-Type": "text/plain",
          "Access-Control-Allow-Origin": "*"
        },
        body: "Couldn't fetch a metting"
      });
      return;
    }
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(result.Item)
    };
    callback(null, response);
  });
};
