import yup from './yup';
import * as veeValidate from 'vee-validate';
import rules from '@vee-validate/rules';
import { loadLocaleFromURL, localize } from '@vee-validate/i18n';

// 使用CDN的方式减少包体积
loadLocaleFromURL('https://unpkg.com/@vee-validate/i18n@4.1.0/dist/locale/zh_CN.json');

veeValidate.configure({
  // 中文支持
  generateMessage: localize('zh_CN')
});

// 批量定义规则
Object.keys(rules).forEach((key) => {
  veeValidate.defineRule(key, rules[key]);
});

export default { yup, ...veeValidate };
