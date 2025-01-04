import * as contentful from "contentful";

const client = contentful.createClient({
  space: "xi790hf9mml3",
  environment: "master",
  accessToken: "B1clAu02__fWaYpVJ4_FNz1Pt-jk2oXCz3jbb0oo1YA",
});

export async function getAllEntries() {
  try {
    const data = await client.getEntries();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getAllCompanyOverview() {
  try {
    const data = await client.getEntries({ content_type: "companyOverview" });
    return data.items.map((item) => {
      return {
        title: item.fields.title,
        description: item.fields.description,
        slug: item.fields.slug,
      };
    });
  } catch (error) {
    console.error(error);
  }
}

export async function getAllCompanyService() {
  try {
    const data = await client.getEntries({ content_type: "companyServices" });
    return data.items.map((item) => {
      return {
        title: item.fields.title,
        description: item.fields.description,
        slug: item.fields.slug,
      };
    });
  } catch (error) {
    console.error(error);
  }
}

export async function getAllCompanyCustomer() {
  try {
    const data = await client.getEntries({
      content_type: "companyCustomers",
    });
    return data.items.map((item) => {
      const brandUrl = item?.fields?.customerLogo?.fields?.file.url;
      return {
        slug: item.fields.slug,
        brandLogo: `https:${brandUrl}`,
      };
    });
  } catch (error) {
    console.error(error);
  }
}

export async function getAllTestimonial() {
  try {
    const data = await client.getEntries({
      content_type: "companyTestimonials",
    });
    return data.items.map((item) => {
      const clientPhotoUrl = item?.fields?.clientPhoto?.fields?.file.url;
      return {
        name: item.fields.clientName,
        slug: item.fields.slug,
        job: item.fields.clientJob,
        feedback: item.fields.clientFeedback,
        clientPhoto: `https:${clientPhotoUrl}`,
      };
    });
  } catch (error) {
    console.error(error);
  }
}

export async function getTeamFrontEnd() {
  try {
    const data = await client.getEntries({
      content_type: "companyTeamFrontEnd",
    });
    return data.items.map((item) => {
      const teamPhotoUrl = item?.fields?.teamPhoto?.fields?.file.url;
      return {
        name: item.fields.name,
        slug: item.fields.slug,
        title: item.fields.title,
        expertise: item.fields.expertise,
        contact: item.fields.contact,
        description: item.fields.description,
        teamPhoto: `https:${teamPhotoUrl}`,
      };
    });
  } catch (error) {
    console.error(error);
  }
}
export async function getTeamBackEnd() {
  try {
    const data = await client.getEntries({
      content_type: "companyTeamBackEnd",
    });
    return data.items.map((item) => {
      const teamPhotoUrl = item?.fields?.teamPhoto?.fields?.file.url;
      return {
        name: item.fields.name,
        slug: item.fields.slug,
        title: item.fields.title,
        expertise: item.fields.expertise,
        contact: item.fields.contact,
        description: item.fields.description,
        teamPhoto: `https:${teamPhotoUrl}`,
      };
    });
  } catch (error) {
    console.error(error);
  }
}
export async function getTeamUiUx() {
  try {
    const data = await client.getEntries({
      content_type: "companyTeamUiux",
    });
    return data.items.map((item) => {
      const teamPhotoUrl = item?.fields?.teamPhoto?.fields?.file.url;
      return {
        name: item.fields.name,
        slug: item.fields.slug,
        title: item.fields.title,
        expertise: item.fields.expertise,
        contact: item.fields.contact,
        description: item.fields.description,
        teamPhoto: `https:${teamPhotoUrl}`,
      };
    });
  } catch (error) {
    console.error(error);
  }
}
