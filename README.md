# text-actions
Send SMS, Viber, WhatsApp on your Github Actions

## Prerequisites

To make use of our API for SMS, you need to be registered at [CM.com](https://cm.com) and have your billing details set in your CM Wallet. This can be recurring billing via credit card (self service), or via alternative payment methods (signed business contract required).

In order to make use of communication channels like WhatsApp, Viber, or RCS, you are required to have access to the programs. This can be requested via [CM.com](https://cm.com) and we will help you with the verification and activation when your request meets the terms and conditions of these additional services. For this too a billing account is required.

## Usage

1. Set up your credentials as secrets in your repository settings using `CM_PRODUCT_TOKEN`.

2. Add the following to your workflow

```yml
- name: 'Sending a message through CM.com'
  uses: cmdotcom/text-actions@v1
  with:
    from: 'CM.com'
    to: '00316012345678'
    message: 'Hello from CM.com'
  env:
    CM_PRODUCT_TOKEN: ${{ secrets.CM_PRODUCT_TOKEN }}
```

## Inputs

### `from`

**Required** Phone number you want to send the message from

### `to`

**Required** Phone number to send the SMS to

### `message`

**Required** The message you want to send

### `CM_PRODUCT_TOKEN`

A CM.com producttoken. Can alternatively be stored in environment.

## Outputs

### `reference`

The reference of the message.

## Credits

Thanks to Twilio for having a [great example](https://github.com/twilio-labs/actions-sms) online.