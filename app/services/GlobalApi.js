import { gql, request } from 'graphql-request';

const MASTER_URL = "https://us-west-2.cdn.hygraph.com/content/" + process.env.EXPO_PUBLIC_MASTER_URL_KEY + "/master";

export const getCategory = async () => {
    const query = gql`
    query Category {
      categories {
        bgcolor {
          hex
        }
        id
        name
        icon {
          url
        }
      }
    }
  `;
    const result = await request(MASTER_URL, query);
    return result;
};

export const getTopBusinessInCategory = async (categoryList) => {
    const result = [];
    for (const categoryName of categoryList) {
        const query = gql`
      query TopBusinessInCategory {
        businessLists(
          where: { category: { name: "${categoryName.name}" } }
          orderBy: rating_DESC
          first: 1
        ) {
          about
          address
          category {
            name
            image {
              url
            }
          }
          contactPerson
          email
          phoneNumber
          name
          id
          rating
          images {
            url
          }
        }
      }
    `;
        const result1 = await request(MASTER_URL, query);
        result.push(result1.businessLists[0]);
    }
    return { businessLists: result };
};

export const getBusinessByCategory = async (categoryName) => {
    const query = gql`
    query getBusinessByCategory {
        businessLists(where: { category: { name: "${categoryName}" } }) {
            id
            name
            about
            address
            category {
                name
            }
            contactPerson
            email
            images {
                url
            }
            phoneNumber
            rating
        }
    }
    `;
    const result = await request(MASTER_URL, query);
    return result;
};

export const getBusinessById = async (id) => {
    const query = gql`
    query GetBusinessById {
        businessList(where: {id: "${id}"}) {
            about
            address
            category {
                name
            }
            contactPerson
            email
            id
            name
            images {
                url
            }
        }
    }`;
    const result = await request(MASTER_URL, query);
    return result;
}; 