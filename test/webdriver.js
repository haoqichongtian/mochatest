const { expect } = require('chai');
const webdriver = require('selenium-webdriver');
const { By } = require('selenium-webdriver');
const chromeDriver =  require('selenium-webdriver/chrome');

describe('百度首页UI测试',function(){
    this.timeout(50000);
    let driver;
    before(()=>{
        driver = new webdriver.Builder()
            .forBrowser('chrome')
            .setChromeOptions(new chromeDriver.Options().addArguments(['headless']))//注释后会启动chrome的webdriver 跑这个用例
            .build();
    });
    it('should have title',(done)=>{
        driver.get('https://www.baidu.com').then(()=>{
            driver.getTitle().then(title=>{
                expect(title).to.equal('百度一下，你就知道');
                done();
            })
        })
    })
    it('should have button',(done)=>{
        driver.findElement(By.id('su')).then(button=>{
            button.getAttribute('value').then(val=>{
                expect(val).to.equal('百度一下');
                done();
            })
        })
    })
    //click跳转新的网页再确定title
    it('shoule click button and correct title',(done)=>{

        driver.findElement(By.id('kw')).sendKeys("test");
        driver.findElement(By.id('su')).click();
        driver.getWindowHandle().then( 
            driver.getTitle().then(title=>{
            expect(title).to.equal('test_百度搜索');
            done();
        }))
    })

    after(()=>{
        driver.quit();
    })
})