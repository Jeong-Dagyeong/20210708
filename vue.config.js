module.exports = {
    // 개발 서버 설정
    devServer: {
        // 프록시 설정
        proxy: {
            // 프록시 요청을 보낼 api의 시작 부분
            '/api': {
                // 프록시 요청을 보낼 서버의 주소
                //CORS
                target: 'http://localhost:3000',
                changeOrigin: true,
                logLevel: 'debug',
            }
        },
        port: 8080,
    },
    
    //npm run build시  생성되는 파일 위치, 참고 : https://vlee.kr/4155
    outputDir: '../../nodejs-workspace/20210705/public',
};
