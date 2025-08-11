/**
 * 模拟API接口数据
 * 用于替代真实的PHP后端接口，提供假数据进行前端演示
 */

// 模拟用户数据
const MOCK_USERS = [
    {
        id: 1,
        username: 'admin',
        password: '123456',
        email: 'admin@demo.com',
        phone: '13800138000',
        realName: '管理员',
        avatar: 'https://via.placeholder.com/100x100',
        role: 'admin',
        status: 'active',
        balance: 100000.00,
        createTime: '2023-01-01 10:00:00',
        lastLoginTime: '2024-01-15 09:30:00'
    },
    {
        id: 2,
        username: 'user001',
        password: '123456',
        email: 'user001@demo.com',
        phone: '13800138001',
        realName: '张三',
        avatar: 'https://via.placeholder.com/100x100',
        role: 'user',
        status: 'active',
        balance: 15680.50,
        createTime: '2023-06-15 14:20:00',
        lastLoginTime: '2024-01-15 08:45:00'
    },
    {
        id: 3,
        username: 'user002',
        password: '123456',
        email: 'user002@demo.com',
        phone: '13800138002',
        realName: '李四',
        avatar: 'https://via.placeholder.com/100x100',
        role: 'user',
        status: 'active',
        balance: 8950.30,
        createTime: '2023-08-20 16:45:00',
        lastLoginTime: '2024-01-14 22:15:00'
    }
];

// 模拟交易数据
const MOCK_TRADES = [
    {
        id: 1,
        userId: 2,
        userName: '张三',
        coinPair: 'BTC/USDT',
        type: 'buy',
        amount: 0.5,
        price: 42000.00,
        total: 21000.00,
        status: 'completed',
        createTime: '2024-01-15 10:30:00'
    },
    {
        id: 2,
        userId: 3,
        userName: '李四',
        coinPair: 'ETH/USDT',
        type: 'sell',
        amount: 2.0,
        price: 2500.00,
        total: 5000.00,
        status: 'completed',
        createTime: '2024-01-15 09:15:00'
    },
    {
        id: 3,
        userId: 2,
        userName: '张三',
        coinPair: 'BTC/USDT',
        type: 'sell',
        amount: 0.2,
        price: 41800.00,
        total: 8360.00,
        status: 'pending',
        createTime: '2024-01-15 11:20:00'
    }
];

// 模拟行情数据
const MOCK_MARKET_DATA = [
    {
        symbol: 'BTC/USDT',
        price: 121733.57,
        change24h: 2.47,
        volume24h: 156789.50,
        high24h: 42800.00,
        low24h: 41200.00
    },
    {
        symbol: 'ETH/USDT',
        price: 4296.03,
        change24h: 1.86,
        volume24h: 89456.20,
        high24h: 2580.00,
        low24h: 2450.00
    },
    {
        symbol: 'XRP/USDT',
        price: 3.25841,
        change24h: 2.30,
        volume24h: 45678.30,
        high24h: 320.00,
        low24h: 310.00
    },
    {
        symbol: 'BNB/USDT',
        price: 315.80,
        change24h: 0.95,
        volume24h: 45678.30,
        high24h: 320.00,
        low24h: 310.00
    }
];

// 模拟统计数据
const MOCK_STATS = {
    totalUsers: 15680,
    activeUsers: 3250,
    totalTrades: 89456,
    totalVolume: 12567890.50,
    newUsersToday: 125,
    tradesVolumnToday: 2567890.30
};

/**
 * 模拟API类
 */
class MockAPI {
    constructor() {
        // 当前登录用户
        this.currentUser = null;
        
        // 从localStorage获取登录状态
        const savedUser = localStorage.getItem('currentUser');
        if (savedUser) {
            this.currentUser = JSON.parse(savedUser);
        }
    }

    /**
     * 模拟网络延迟
     */
    delay(ms = 500) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    /**
     * 用户登录
     * @param {string} email 
     * @param {string} password 
     */
    async login(email, password) {
        await this.delay();
        
        const user = MOCK_USERS.find(u => 
            u.email === email && u.password === password
        );
        
        if (user) {
            this.currentUser = user;
            localStorage.setItem('currentUser', JSON.stringify(user));
            return {
                success: true,
                message: window.i18n ? window.i18n.t('login_success') : '登录成功',
                data: user
            };
        } else {
            return {
                success: false,
                message: window.i18n ? window.i18n.t('email_or_password_error') : '邮箱或密码错误'
            };
        }
    }

    /**
     * 用户注册
     * @param {object} userData 
     */
    async register(userData) {
        await this.delay();
        
        // 检查用户名是否已存在
        const existingUser = MOCK_USERS.find(u => u.username === userData.username);
        if (existingUser) {
            return {
                success: false,
                message: '用户名已存在'
            };
        }

        // 创建新用户
        const newUser = {
            id: MOCK_USERS.length + 1,
            ...userData,
            role: 'user',
            status: 'active',
            balance: 0,
            createTime: new Date().toLocaleString(),
            lastLoginTime: null
        };

        MOCK_USERS.push(newUser);
        
        return {
            success: true,
            message: window.i18n ? window.i18n.t('register_success') : '注册成功',
            data: newUser
        };
    }

    /**
     * 用户退出登录
     */
    logout() {
        this.currentUser = null;
        localStorage.removeItem('currentUser');
        return {
            success: true,
            message: '退出成功'
        };
    }

    /**
     * 获取用户列表
     * @param {number} page 
     * @param {number} pageSize 
     */
    async getUserList(page = 1, pageSize = 10) {
        await this.delay();
        
        const start = (page - 1) * pageSize;
        const end = start + pageSize;
        const users = MOCK_USERS.slice(start, end);
        
        return {
            success: true,
            data: {
                list: users,
                total: MOCK_USERS.length,
                page,
                pageSize
            }
        };
    }

    /**
     * 获取交易列表
     * @param {number} page 
     * @param {number} pageSize 
     */
    async getTradeList(page = 1, pageSize = 10) {
        await this.delay();
        
        const start = (page - 1) * pageSize;
        const end = start + pageSize;
        const trades = MOCK_TRADES.slice(start, end);
        
        return {
            success: true,
            data: {
                list: trades,
                total: MOCK_TRADES.length,
                page,
                pageSize
            }
        };
    }

    /**
     * 获取行情数据
     */
    async getMarketData() {
        await this.delay(200);
        
        return {
            success: true,
            data: MOCK_MARKET_DATA
        };
    }

    /**
     * 获取统计数据
     */
    async getStats() {
        await this.delay();
        
        return {
            success: true,
            data: MOCK_STATS
        };
    }

    /**
     * 创建交易订单
     * @param {object} orderData 
     */
    async createOrder(orderData) {
        await this.delay();
        
        if (!this.currentUser) {
            return {
                success: false,
                message: '请先登录'
            };
        }

        const newOrder = {
            id: MOCK_TRADES.length + 1,
            userId: this.currentUser.id,
            userName: this.currentUser.realName,
            ...orderData,
            status: 'pending',
            createTime: new Date().toLocaleString()
        };

        MOCK_TRADES.unshift(newOrder);
        
        return {
            success: true,
            message: '订单创建成功',
            data: newOrder
        };
    }

    /**
     * 获取当前用户信息
     */
    getCurrentUser() {
        return this.currentUser;
    }

    /**
     * 检查登录状态
     */
    isLoggedIn() {
        return !!this.currentUser;
    }
}

// 创建全局API实例
window.mockAPI = new MockAPI();

// 导出供其他模块使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MockAPI;
}
