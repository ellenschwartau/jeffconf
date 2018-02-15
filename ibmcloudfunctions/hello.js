/**

 $ bx wsk action invoke -b hello -p name "you" --result
 > {
 >     "message": "Hello, you!"
 > }

 */
function main(params) {
    return { message: `Hello, ${params.name || 'JeffConf'}!` };
}