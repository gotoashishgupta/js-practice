export const isEditable = (profileFieldsObj, name, isAppManager) =>
  !profileFieldsObj[name].is_sync_enabled &&
  (profileFieldsObj[name].isEditable || isAppManager);

/**
 * Editable Condditions
 * {
 *   is_editable: false,
 *   is_sync_enabled: false,
 *   is_app_manager: false
 * }
 * SYNC | MANAGER | ISEDIT | OUT
 * 1    | X       | X      | 0
 * 0    | 1       | X      | 1
 * 0    | 0       | 1      | 1
 */
