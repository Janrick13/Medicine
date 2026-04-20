import type { Schema, Struct } from '@strapi/strapi';

export interface SubcategorySubcategory extends Struct.ComponentSchema {
  collectionName: 'components_subcategory_subcategories';
  info: {
    displayName: 'Subcategory';
  };
  attributes: {
    SubcatDesc: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'subcategory.subcategory': SubcategorySubcategory;
    }
  }
}
