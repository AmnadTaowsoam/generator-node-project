const Generator = require('yeoman-generator').default;

module.exports = class extends Generator {
  async prompting() {
    this.answers = await this.prompt([
      // ชื่อ service
      {
        type: 'input',
        name: 'name',
        message: 'Service name:',
        default: 'auth-service'
      },
      // พอร์ต
      {
        type: 'input',
        name: 'port',
        message: 'Port to run on:',
        default: '3000'
      },
      // Database config
      {
        type: 'input',
        name: 'dbHost',
        message: 'DB_HOST:',
        default: 'localhost'
      },
      {
        type: 'input',
        name: 'dbPort',
        message: 'DB_PORT:',
        default: '5432'
      },
      {
        type: 'input',
        name: 'dbName',
        message: 'DB_NAME:',
        default: 'authen_db'
      },
      {
        type: 'input',
        name: 'dbUser',
        message: 'DB_USER:',
        default: 'postgres'
      },
      {
        type: 'password',
        name: 'dbPass',
        message: 'DB_PASSWORD:',
        default: 'password'
      },
      // Additional settings
      {
        type: 'input',
        name: 'apiKey',
        message: 'API_KEY:',
        default: ''
      },
      {
        type: 'input',
        name: 'jwtSecret',
        message: 'JWT_SECRET_KEY:',
        default: 'your_jwt_secret'
      },
      {
        type: 'input',
        name: 'secretKey',
        message: 'SECRET_KEY:',
        default: 'your_secret_key'
      },
      {
        type: 'input',
        name: 'tokenExpiration',
        message: 'TOKEN_EXPIRATION_MINUTES:',
        default: '60'
      },
      {
        type: 'input',
        name: 'connectTimeout',
        message: 'CONNECTION_TIMEOUT (ms):',
        default: '5000'
      },
      {
        type: 'input',
        name: 'readTimeout',
        message: 'READ_TIMEOUT (ms):',
        default: '5000'
      },
      {
        type: 'input',
        name: 'algorithm',
        message: 'ALGORITHM:',
        default: 'HS256'
      },
      {
        type: 'list',
        name: 'logLevel',
        message: 'LOG_LEVEL:',
        choices: ['debug', 'info', 'warn', 'error'],
        default: 'info'
      }
    ]);
  }

  writing() {
    const { name } = this.answers;
    const targetDir = this.destinationPath(name);

    // 1) คัดลอกเทมเพลตทั้งหมด พร้อม inject ค่าจาก this.answers
    this.fs.copyTpl(
      this.templatePath('**/*'),
      targetDir,
      this.answers,
      null,
      {
        globOptions: {
          dot: true,
          ignore: ['**/node_modules/**', '**/*.lock']
        },
        // ตรงนี้ใช้ processDestinationPath เพื่อเปลี่ยนชื่อไฟล์ก่อนเขียนลง disk
        processDestinationPath: filePath => {
          // ถ้าไฟล์ลงท้าย .hbs ให้ตัดทิ้ง
          return filePath.endsWith('.hbs')
            ? filePath.replace(/\.hbs$/, '')
            : filePath;
        }
      }
    );

    // 2) คัดลอก .env.example → .env ให้อัตโนมัติ
    this.fs.copy(
      this.destinationPath(name, '.env.example'),
      this.destinationPath(name, '.env')
    );
  }

  install() {
    const { name } = this.answers;
    this.log(`Installing dependencies in ${name}…`);
    this.spawnCommandSync('npm', ['install'], { cwd: name });
  }
};
