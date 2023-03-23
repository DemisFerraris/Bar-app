const BASE_URL_PRODUCTS = 'http://localhost:8080/products';
const BASE_URL_USERS = 'http://localhost:8080/users';

// GET PRODUCTS
export const getProducts = async () => {
  try {
    const response = await fetch(BASE_URL_PRODUCTS);
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};

// GET USERS --> usata
export const getUsers = async () => {
  try {
    const response = await fetch(BASE_URL_USERS);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// GET PRODUCTS USER --> usata
export const getProductsUser = async (id) => {
  try {
    const response = await fetch(`${BASE_URL_USERS}/${id}/products`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// CREATE PRODUCT
export const postProduct = async (product) => {
  try {
    const response = await fetch(BASE_URL_PRODUCTS, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};

// CREATE USER --> usata
export const postUser = async (user) => {
  try {
    const response = await fetch(BASE_URL_USERS, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};

// DELETE USER --> usata
export const deleteUserById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL_USERS}/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      return { ok: true, data: 'Success' };
    } else {
      return { ok: false, data: await response.json() };
    }
  } catch (error) {
    return { ok: false, data: error };
  }
};

// DELETE PRODUCT
export const deleteProductById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL_PRODUCTS}/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      return { ok: true, data: 'Success' };
    } else {
      return { ok: false, data: await response.json() };
    }
  } catch (error) {
    return { ok: false, data: error };
  }
};

// GET USER --> usata
export const getUserById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL_USERS}/${id}`);
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};

// GET PRODUCT
export const getProductById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL_PRODUCTS}/${id}`);
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};

// UPDATE USER --> usata
export const putUser = async (user, id) => {
  try {
    const response = await fetch(`${BASE_URL_USERS}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};

// UPDATE PRODUCT
export const putProduct = async (product, id) => {
  try {
    const response = await fetch(`${BASE_URL_PRODUCTS}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};

// DELETE PRODUCT FROM USER --> usata
export const deleteProductFromUser = async (userId, productId) => {
  try {
    const response = await fetch(
      `${BASE_URL_USERS}/${userId}/products/${productId}`,
      {
        method: 'DELETE',
      }
    );
    if (response.ok) {
      const data = await response.json();
      return { ok: true, data: data };
    } else {
      return { ok: false, data: await response.json() };
    }
  } catch (error) {
    return { ok: false, data: error };
  }
};

// ADD PRODUCT FROM USER --> usata
export const addProductFromUser = async (userId, product) => {
  try {
    const response = await fetch(`${BASE_URL_USERS}/${userId}/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};

// PRODUCT NAME SEARCH --> usata
export const searchProducts = async (term) => {
  let url = 'http://localhost:8080/products';
  if (term !== null && term !== undefined && term !== '') {
    url += '?name=' + term;
  }
  try {
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data);
    return data; // render in base ai dati
  } catch (error) {
    console.log(error);
  }
};
