import amqplib from 'amqplib'
import config from '../config';
const {MSG_QUEUE_URL,EXCHANGE_NAME} = config

//Message Broker
// export const CreateChannel = async () => {
//     try {
//         console.log(amqplib.connect)
//         console.log(MSG_QUEUE_URL)
//       const connection = await amqplib.connect(MSG_QUEUE_URL);
//     //   console.log('sfsfsdfs',connection)
//       const channel = await connection.createChannel();
//       await channel.assertQueue(EXCHANGE_NAME, "direct", { durable: true });
//       return channel;
//     } catch (err) {
//       throw err;
//     }
//   };
