// ==========================================================================
// Project:   Sproutcore AutoAdmin
// Copyright: ©2006-2009 Sprout Systems, Inc. and contributors.
//            Portions ©2008-2009 Apple Inc. All rights reserved.
// License:   Licened under MIT license (see license.js)
// ==========================================================================

/** @namespace

  My cool new app.  Describe your application.
  
  @extends SC.Object
*/
SC.AutoAdmin = SC.Object.create(
  /** @scope Django-admin.prototype */ {

  NAMESPACE: 'SC.AutoAdmin',
  VERSION: '0.1.0',
  
  // Will become.
  // store: SC.Store.create().from(Django.DataSource),
  store: SC.Store.create().from(SC.Record.fixtures),
  
  currentView: null

}) ;
