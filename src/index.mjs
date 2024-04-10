export const handler = async (event) => {
    // TODO implement
    const response = {
      statusCode: 200,
      body: JSON.stringify('Hola desde lambda!'),
    };
    return response;
  };
  