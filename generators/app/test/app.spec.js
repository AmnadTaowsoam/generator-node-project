const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-auth-service:app', () => {
  // รัน generator ก่อนแต่ละเคส
  before(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts({ name: 'my-auth', port: '4200' }) // ตอบ prompt
      .toPromise();
  });

  it('creates base files', () => {
    assert.file([
      'my-auth/package.json',
      'my-auth/.dockerignore',
      'my-auth/Dockerfile',
      'my-auth/tsconfig.json',
      'my-auth/src/server.ts'
    ]);
  });

  it('injects correct values into package.json', () => {
    assert.fileContent(
      'my-auth/package.json',
      /"name": "my-auth"/
    );
  });

  it('injects correct port in server.ts', () => {
    assert.fileContent(
      'my-auth/src/server.ts',
      /const PORT = 4200;/
    );
  });
});
