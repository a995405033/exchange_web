/**
 * 多语言支持模块
 * 支持中文、英文、繁体中文
 */

// 语言包配置
const I18N_PACKAGES = {
    'zh': {
        // 通用
        'language': '语言',
        'switch_language': '切换语言',
        'language_settings': '语言设置',
        
        // 页面标题
        'financial_trading_platform': '金融交易平台',
        'login': '登录',
        'register': '注册',
        'dashboard': '控制台',
        'user_management': '用户管理',
        'trading_management': '交易管理',
        
        // 登录注册
        'please_enter_email': '请输入邮箱地址',
        'please_enter_password': '请输入密码',
        'please_enter_username': '请输入用户名',
        'please_confirm_password': '请确认密码',
        'invite_code_optional': '邀请码（选填）',
        'remember_password': '记住密码',
        'forgot_password': '忘记密码？',
        'agree_terms': '我同意',
        'user_agreement': '用户协议',
        'login_success': '登录成功',
        'register_success': '注册成功',
        'login_failed': '登录失败',
        'register_failed': '注册失败',
        'please_fill_complete_info': '请填写完整的登录信息',
        'please_fill_complete_register_info': '请填写完整的注册信息',
        'password_not_match': '两次输入的密码不一致',
        'password_too_short': '密码长度不能少于6位',
        'please_agree_terms': '请同意用户协议',
        'email_or_password_error': '邮箱或密码错误',
        'username_exists': '用户名已存在',
        'please_try_again': '请重试',
        'please_login': '请登录',
        
        // 演示账号
        'demo_accounts': '演示账号',
        'admin': '管理员',
        'normal_user': '普通用户',
        'admin_login': '管理员登录',
        'user_login': '用户登录',
        
        // 其他功能
        'other_login_methods': '其他登录方式',
        'wechat': '微信',
        'alipay': '支付宝',
        'demo_version_not_support': '演示版本暂不支持',
        'demo_version': '演示版本',
        'user_agreement_page': '用户协议页面',
        'demo_version_forgot_password': '演示版本暂不支持找回密码功能，请使用演示账号登录',
        
        // 表单验证
        'required_field': '必填字段',
        'invalid_email': '邮箱格式不正确',
        'password_min_length': '密码最少6位',
        
        // 状态
        'loading': '加载中...',
        'processing': '处理中...',
        'success': '成功',
        'error': '错误',
        'warning': '警告',
        'info': '信息',
        
        // 语言设置页面
        'current_language': '当前语言',
        'language_note': '语言说明',
        'language_description': '切换语言后，系统界面将立即更新为您选择的语言。语言设置会保存在您的设备中，下次访问时将自动应用您的语言偏好。',
        'powered_by': '技术支持'
    },
    
    'en': {
        // Common
        'language': 'Language',
        'switch_language': 'Switch Language',
        'language_settings': 'Language Settings',
        
        // Page titles
        'financial_trading_platform': 'Financial Trading Platform',
        'login': 'Login',
        'register': 'Register',
        'dashboard': 'Dashboard',
        'user_management': 'User Management',
        'trading_management': 'Trading Management',
        
        // Login & Register
        'please_enter_email': 'Please enter email address',
        'please_enter_password': 'Please enter password',
        'please_enter_username': 'Please enter username',
        'please_confirm_password': 'Please confirm password',
        'invite_code_optional': 'Invite Code (Optional)',
        'remember_password': 'Remember password',
        'forgot_password': 'Forgot password?',
        'agree_terms': 'I agree to the',
        'user_agreement': 'User Agreement',
        'login_success': 'Login successful',
        'register_success': 'Registration successful',
        'login_failed': 'Login failed',
        'register_failed': 'Registration failed',
        'please_fill_complete_info': 'Please fill in complete login information',
        'please_fill_complete_register_info': 'Please fill in complete registration information',
        'password_not_match': 'The two passwords do not match',
        'password_too_short': 'Password must be at least 6 characters',
        'please_agree_terms': 'Please agree to the terms',
        'email_or_password_error': 'Email or password error',
        'username_exists': 'Username already exists',
        'please_try_again': 'Please try again',
        'please_login': 'Please login',
        
        // Demo accounts
        'demo_accounts': 'Demo Accounts',
        'admin': 'Administrator',
        'normal_user': 'Normal User',
        'admin_login': 'Admin Login',
        'user_login': 'User Login',
        
        // Other features
        'other_login_methods': 'Other Login Methods',
        'wechat': 'WeChat',
        'alipay': 'Alipay',
        'demo_version_not_support': 'Demo version does not support',
        'demo_version': 'Demo Version',
        'user_agreement_page': 'User Agreement Page',
        'demo_version_forgot_password': 'Demo version does not support password recovery, please use demo accounts to login',
        
        // Form validation
        'required_field': 'Required field',
        'invalid_email': 'Invalid email format',
        'password_min_length': 'Password minimum 6 characters',
        
        // Status
        'loading': 'Loading...',
        'processing': 'Processing...',
        'success': 'Success',
        'error': 'Error',
        'warning': 'Warning',
        'info': 'Information',
        
        // Language settings page
        'current_language': 'Current Language',
        'language_note': 'Language Note',
        'language_description': 'After switching languages, the system interface will be updated immediately to your selected language. Language settings will be saved on your device and will automatically apply your language preferences on your next visit.',
        'powered_by': 'Powered by'
    },
    
    'zh-tw': {
        // 通用
        'language': '語言',
        'switch_language': '切換語言',
        'language_settings': '語言設置',
        
        // 頁面標題
        'financial_trading_platform': '金融交易平台',
        'login': '登錄',
        'register': '註冊',
        'dashboard': '控制台',
        'user_management': '用戶管理',
        'trading_management': '交易管理',
        
        // 登錄註冊
        'please_enter_email': '請輸入郵箱地址',
        'please_enter_password': '請輸入密碼',
        'please_enter_username': '請輸入用戶名',
        'please_confirm_password': '請確認密碼',
        'invite_code_optional': '邀請碼（選填）',
        'remember_password': '記住密碼',
        'forgot_password': '忘記密碼？',
        'agree_terms': '我同意',
        'user_agreement': '用戶協議',
        'login_success': '登錄成功',
        'register_success': '註冊成功',
        'login_failed': '登錄失敗',
        'register_failed': '註冊失敗',
        'please_fill_complete_info': '請填寫完整的登錄信息',
        'please_fill_complete_register_info': '請填寫完整的註冊信息',
        'password_not_match': '兩次輸入的密碼不一致',
        'password_too_short': '密碼長度不能少於6位',
        'please_agree_terms': '請同意用戶協議',
        'email_or_password_error': '郵箱或密碼錯誤',
        'username_exists': '用戶名已存在',
        'please_try_again': '請重試',
        'please_login': '請登錄',
        
        // 演示賬號
        'demo_accounts': '演示賬號',
        'admin': '管理員',
        'normal_user': '普通用戶',
        'admin_login': '管理員登錄',
        'user_login': '用戶登錄',
        
        // 其他功能
        'other_login_methods': '其他登錄方式',
        'wechat': '微信',
        'alipay': '支付寶',
        'demo_version_not_support': '演示版本暫不支持',
        'demo_version': '演示版本',
        'user_agreement_page': '用戶協議頁面',
        'demo_version_forgot_password': '演示版本暫不支持找回密碼功能，請使用演示賬號登錄',
        
        // 表單驗證
        'required_field': '必填字段',
        'invalid_email': '郵箱格式不正確',
        'password_min_length': '密碼最少6位',
        
        // 狀態
        'loading': '加載中...',
        'processing': '處理中...',
        'success': '成功',
        'error': '錯誤',
        'warning': '警告',
        'info': '信息',
        
        // 語言設置頁面
        'current_language': '當前語言',
        'language_note': '語言說明',
        'language_description': '切換語言後，系統界面將立即更新為您選擇的語言。語言設置會保存在您的設備中，下次訪問時將自動應用您的語言偏好。',
        'powered_by': '技術支持'
    }
};

// 当前语言
let currentLanguage = 'zh';

// 语言切换器类
class I18nManager {
    constructor() {
        this.currentLanguage = this.getStoredLanguage();
        this.init();
    }
    
    /**
     * 初始化语言管理器
     */
    init() {
        this.setLanguage(this.currentLanguage);
        this.updatePageContent();
    }
    
    /**
     * 获取存储的语言设置
     */
    getStoredLanguage() {
        return localStorage.getItem('demo_language') || 'zh';
    }
    
    /**
     * 设置语言
     */
    setLanguage(lang) {
        if (I18N_PACKAGES[lang]) {
            this.currentLanguage = lang;
            localStorage.setItem('demo_language', lang);
            document.documentElement.setAttribute('lang', lang);
            return true;
        }
        return false;
    }
    
    /**
     * 获取当前语言
     */
    getCurrentLanguage() {
        return this.currentLanguage;
    }
    
    /**
     * 获取翻译文本
     */
    t(key, ...args) {
        const text = I18N_PACKAGES[this.currentLanguage][key] || 
                    I18N_PACKAGES['zh'][key] || 
                    key;
        
        if (args.length > 0) {
            return text.replace(/\{(\d+)\}/g, (match, index) => {
                return args[index] || match;
            });
        }
        
        return text;
    }
    
    /**
     * 切换语言
     */
    switchLanguage(lang) {
        if (this.setLanguage(lang)) {
            this.updatePageContent();
            this.updateLanguageButton();
            return true;
        }
        return false;
    }
    
    /**
     * 更新页面内容
     */
    updatePageContent() {
        // 更新所有带有 data-i18n 属性的元素
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (key) {
                element.textContent = this.t(key);
            }
        });
        
        // 更新所有带有 data-i18n-placeholder 属性的输入框
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (key) {
                element.placeholder = this.t(key);
            }
        });
        
        // 更新所有带有 data-i18n-title 属性的元素
        document.querySelectorAll('[data-i18n-title]').forEach(element => {
            const key = element.getAttribute('data-i18n-title');
            if (key) {
                element.title = this.t(key);
            }
        });
    }
    
    /**
     * 更新语言切换按钮
     */
    updateLanguageButton() {
        const langBtn = document.getElementById('languageSwitchBtn');
        if (langBtn) {
            // 更新按钮文本为当前语言的"切换语言"
            const switchText = langBtn.querySelector('[data-i18n="switch_language"]');
            if (switchText) {
                switchText.textContent = this.t('switch_language');
            }
        }
    }
    
    /**
     * 获取语言显示名称
     */
    getLanguageDisplayName(lang) {
        const langNames = {
            'zh': '中文',
            'en': 'English',
            'zh-tw': '繁體中文'
        };
        return langNames[lang] || lang;
    }
    

}

// 创建全局实例
window.i18n = new I18nManager();

// 语言切换事件处理
window.switchLanguage = function(lang) {
    window.i18n.switchLanguage(lang);
};
