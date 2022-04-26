export type DeploymentItem = {
  /**
   * DeploymentId (Partition Key)
   */
  PK: string;
  /**
   * CreateDate (Sort Key)
   */
  SK: string;
  /**
   * Status of the deployment
   */
  Status: 'CREATE_IN_PROGRESS' | 'CREATE_COMPLETE' | 'CREATE_FAILED';
  /**
   * Version of the item
   */
  ItemVersion: number;
  /**
   * Stringified object that contains the route config.
   */
  Routes: string;
  /**
   * Stringified object that contains the static routes that should be saved
   * from the static file server.
   */
  StaticRoutes: string;
  /**
   * Stringified object that contains the routes that are prerendered.
   */
  Prerenders: string;
};

export type AliasItem = {
  /**
   * Alias (Partition Key), is always a full domain name,
   * e.g. my-sub.example.com
   */
  PK: string;
  /**
   * DeploymentId#CreateDate (Sort Key)
   */
  SK: string;
  /**
   * Version of the item
   */
  ItemVersion: number;
  /**
   * Stringified object that contains the route config.
   */
  Routes: string;
  /**
   * Stringified object that contains the static routes that should be saved
   * from the static file server.
   */
  StaticRoutes: string;
  /**
   * Stringified object that contains the routes that are prerendered.
   */
  Prerenders: string;
};