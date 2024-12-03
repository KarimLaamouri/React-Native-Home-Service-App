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