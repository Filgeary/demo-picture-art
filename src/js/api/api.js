const postDataJSON = async (url, data) => {
  try {
    const result = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    });

    if (!result.ok) {
      throw new Error(`Failed to fetch ${url}, status: ${result.status}`);
    }

    return await result.json();
  } catch (err) {
    console.error(err);
  }
};

/**
 * Post data via text
 * @param {string} url Url for posting data
 * @param {Object} data Object from FormData
 * @returns Text response
 */
const postDataText = async (url, data) => {
  try {
    const result = await fetch(url, {
      method: 'POST',
      body: data,
    });

    if (!result.ok) {
      throw new Error(`Failed to fetch ${url}, status: ${result.status}`);
    }

    return await result.text();
  } catch (err) {
    console.error(err);
  }
};

export { postDataJSON, postDataText };
