"use client";
import React from "react";
import "./style.css";
import { createViewerHook } from "@rich-data/viewer";
import "@rich-data/viewer/theme/base.css";
import { JsonViewer } from "@rich-data/viewer";

import { useQuery, useMutation } from "@apollo/client";
import { GET_USER } from "@/functions/graphql/queries/user.queries.js";
import { GET_ADS, GET_SHARED } from "@/functions/graphql/queries/ads.query";
import { GET_REFERRALS } from "@/functions/graphql/queries/refferals.query";
import {
  SET_REFERRED,
  SET_REFERRER,
} from "@/functions/graphql/queries/referals.mutation";
import {
  ADD_SHARE,
  ADD_SHARE_PROOF,
} from "@/functions/graphql/queries/ads.mutation";
import { handleImage } from "@/functions/image/upload";

export default function Integrations() {
  //userData might contain all user data if the role is admin
  const {
    loading: userLoading,
    error: userError,
    data: userData,
  } = useQuery(GET_USER);

  //Referrals

  //Get referral data
  const {
    loading: referralsLoading,
    error: referralsError,
    data: referralsData,
  } = useQuery(GET_REFERRALS);

  const [
    mutateReferral,
    {
      mutation_data: referral_data,
      loading: referral_loading,
      error: referral_error,
    },
  ] = useMutation(SET_REFERRER);

  //activate a referral. Give the userId of the user who referred
  const getReferred = (userId) => {
    mutateReferral({
      variables: {
        referrer: userId,
      },
    });
  };

  //ads

  //Get all ads
  const {
    loading: ads_loading,
    error: ads_error,
    data: ads_data,
  } = useQuery(GET_ADS);

  const [
    mutateAdShare,
    { mutation_data: ad_mutate_data, share_loading, share_error },
  ] = useMutation(ADD_SHARE);

  //Share an ad given an id. key is the url key. The short link would be {server}/link/key
  const shareAd = (id) => {
    mutateAdShare({
      variables: {
        ad_id: id,
        key: Date.now().toString(36) + Math.random().toString(36).substring(2),
      },
    });
  };

  const {
    loading: ads_shared_loading,
    error: ads_shared_error,
    data: ads_shared_data,
  } = useQuery(GET_SHARED);

  const [
    mutateAdProof,
    { mutation_data: ad_proof_mutate_data, ad_proof_loading, ad_proof_error },
  ] = useMutation(ADD_SHARE_PROOF);

  const uploadProof = async (id) => {

    const keys = await handleImage(Array.from(document.getElementById("ad_proof").files), "ad_proof/");

    mutateAdProof({
      variables: {
        id: id, //id of the add_shares not ad
        picture: keys[0],
      },
    });
  };

  

  return (
    <div style={{ fontSize: "20px", padding: "0 30px" }}>
      <h1
        style={{
          textShadow:
            "-4px 4px #ef3550,-8px 8px #f48fb1,-12px 12px #7e57c2,-16px 16px #2196f3,-20px 20px #26c6da,-24px 24px #43a047,-28px 28px #eeff41,-32px 32px #f9a825,-36px 36px #ff5722",
          fontSize: "4rem",
          padding: "0.5em 1em",
          fontWeight: "bold",
          color: "#ffffff",
        }}
      >
        Integrations
      </h1>
      <div>
        <div className="section">
          <h3>User</h3>
          <JsonViewer value={userData} />
        </div>

        <div className="section">
          <h3>Referrals</h3>
          <div>
            <JsonViewer value={referralsData} />
            <button onClick={() => getReferred("kx4jxdRAaTbQsUpTySgTJGCLiIy2")}>
              Activate referral
            </button>
          </div>
        </div>

        <div className="section">
          <h3>Ads</h3>
          <div>
            <div>
              <JsonViewer value={ads_data} />
            </div>
          </div>
          <div>
            <div>
              <h5>shared ads</h5>
              <JsonViewer value={ads_shared_data} />
              <button
                onClick={() => shareAd("22620de6-848e-4411-98cf-ce714a170706")}
              >
                share ad
              </button>
            </div>
            <div>
              <input type="file" id="ad_proof" />
              <button
                onClick={() =>
                  uploadProof("06c22789-97b2-448c-ac8a-af0c63b9fa12")
                }
              >
                {" "}
                upload proof
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
